import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { ChevronLeft, ChevronRight, Hand } from "lucide-react";
import WarpDialog from "../ui/WarpDialog.jsx";
import { cn } from "../../lib/utils.js";

/*
 * PhotoDeck — the travel photos as a pile of polaroids on a table.
 *
 * The top photo is the only interactive one: drag it aside (or use the arrows,
 * or ←/→ with focus in the deck) to toss it and uncover the next; tap it to
 * open it large. The previous photo comes back from the side it was tossed
 * to, so the motion keeps its spatial sense.
 *
 * Every card is keyed by photo id and animates between depth poses, so when
 * the top card leaves, the one below rises into its place instead of being
 * swapped in.
 */

const EASE_OUT = [0.23, 1, 0.32, 1];
const STACK_DEPTH = 3;
const THROW_DISTANCE = 90; // px dragged before a release tosses the photo
const THROW_VELOCITY = 450; // px/s — a quick flick tosses it regardless

// Each photo keeps its own resting tilt, so the pile looks hand-dropped.
const TILTS = [-3, 2, -1, 3, -2, 1, -3, 2];
const tiltOf = (index) => TILTS[index % TILTS.length];

const images = import.meta.glob("../../assets/gallery/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});
export const photoUrl = (id, width) =>
  images[`../../assets/gallery/${id}-${width}.webp`];

// Where each layer of the pile rests. The cards below fan out to opposite
// sides so their edges show; each photo's own tilt adds a little noise.
const PILE = [
  { x: 0, y: 0, rotate: 0, scale: 1 },
  { x: 18, y: 6, rotate: 7, scale: 0.97 },
  { x: -16, y: 12, rotate: -8, scale: 0.94 },
];

const pose = (depth, tilt) => ({
  x: PILE[depth].x,
  y: PILE[depth].y,
  scale: PILE[depth].scale,
  rotate: PILE[depth].rotate + tilt * 0.4,
  opacity: 1,
});

export default function PhotoDeck({ photos, copy, closeLabel }) {
  const count = photos.length;
  const [index, setIndex] = useState(0);
  // Which side the last photo was tossed to; the previous photo returns from it.
  const [side, setSide] = useState(-1);
  const [touched, setTouched] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  // Focus should land on the top photo after a keyboard toss (the focused
  // card just left) or after closing the large view — and only then, never
  // when a mouse click on the arrows changes the top photo. The ref is the
  // one-shot request; the counter re-runs the effect when the top card
  // stays the same.
  const focusTopRef = useRef(false);
  const [focusRequest, setFocusRequest] = useState(0);
  const requestTopFocus = () => {
    focusTopRef.current = true;
    setFocusRequest((n) => n + 1);
  };

  const next = (towards = -1) => {
    setSide(towards);
    setTouched(true);
    setIndex((i) => (i + 1) % count);
  };
  const previous = () => {
    setTouched(true);
    setIndex((i) => (i - 1 + count) % count);
  };

  // Warm the cache for the photo that will surface after the visible pile.
  useEffect(() => {
    if (count <= STACK_DEPTH) return;
    const upcoming = photos[(index + STACK_DEPTH) % count];
    const img = new Image();
    img.src = photoUrl(upcoming.id, 960);
  }, [index, count, photos]);

  if (count === 0) return null;

  // One card fewer than the photo count, so a tossed photo is never still in
  // the pile under the same key while it animates out.
  const pileSize = count > 1 ? Math.min(STACK_DEPTH, count - 1) : 1;
  const stack = Array.from({ length: pileSize }, (_, depth) => {
    const photoIndex = (index + depth) % count;
    return { photo: photos[photoIndex], photoIndex, depth };
  });
  const current = photos[index];

  return (
    <div className="flex flex-col items-center">
      <div
        role="group"
        aria-roledescription={copy.deckRole}
        aria-label={copy.galleryLabel}
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault();
          if (event.key === "ArrowRight") next(-1);
          else previous();
          if (event.target.getAttribute("role") === "button") requestTopFocus();
        }}
        className="relative grid w-[min(300px,72vw)] place-items-center"
      >
        <AnimatePresence initial={false} custom={side}>
          {stack
            .slice()
            .reverse()
            .map(({ photo, photoIndex, depth }) => (
              <DeckCard
                key={photo.id}
                photo={photo}
                depth={depth}
                tilt={tiltOf(photoIndex)}
                label={`${copy.openPhoto} ${photoIndex + 1} / ${count}`}
                alt={photo.title || copy.photoAlt}
                onThrow={next}
                onOpen={() => setViewerOpen(true)}
                focusTopRef={focusTopRef}
                focusRequest={focusRequest}
              />
            ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <RoundButton label={copy.previousPhoto} onClick={previous}>
          <ChevronLeft aria-hidden className="h-4 w-4" />
        </RoundButton>
        <p
          aria-live="polite"
          className="min-w-[5.5rem] text-center font-marker text-lg text-white/75"
        >
          {String(index + 1).padStart(2, "0")}
          <span className="mx-1.5 text-white/40">/</span>
          {String(count).padStart(2, "0")}
        </p>
        <RoundButton label={copy.nextPhoto} onClick={() => next(-1)}>
          <ChevronRight aria-hidden className="h-4 w-4" />
        </RoundButton>
      </div>

      {/* A one-time nudge: it fades once the deck has been used. */}
      <p
        aria-hidden
        className={cn(
          "mt-3 flex items-center gap-1.5 text-xs text-white/50 transition-opacity duration-300",
          touched && "opacity-0",
        )}
      >
        <Hand className="h-3.5 w-3.5" />
        {copy.dragHint}
      </p>

      <PhotoViewer
        open={viewerOpen}
        onClose={() => {
          setViewerOpen(false);
          requestTopFocus();
        }}
        photo={current}
        index={index}
        count={count}
        copy={copy}
        closeLabel={closeLabel}
        onPrevious={previous}
        onNext={() => next(-1)}
      />
    </div>
  );
}

function DeckCard({
  photo,
  depth,
  tilt,
  label,
  alt,
  onThrow,
  onOpen,
  focusTopRef,
  focusRequest,
}) {
  const isTop = depth === 0;
  const cardRef = useRef(null);

  useEffect(() => {
    if (!isTop || !focusTopRef.current) return;
    focusTopRef.current = false;
    cardRef.current?.focus({ preventScroll: true });
  }, [isTop, focusRequest, focusTopRef]);

  // A release after dragging must not also count as a tap that opens the
  // large view (it did with short, fast drags).
  const draggedRef = useRef(false);
  const dragX = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-240, 240], [-14, 14]);

  const variants = {
    // A card entering on top is the previous photo coming back from the side
    // it was tossed to; one entering at the bottom slides in under the pile.
    enter: (from) =>
      isTop
        ? { x: from * 360, y: 0, rotate: from * 22, scale: 1, opacity: 0 }
        : { ...pose(depth, tilt), y: PILE[depth].y + 16, opacity: 0 },
    rest: pose(depth, tilt),
    exit: (towards) =>
      isTop
        ? {
            x: towards * 420,
            rotate: towards * 24,
            opacity: 0,
            transition: { duration: 0.32, ease: EASE_OUT },
          }
        : { opacity: 0, transition: { duration: 0.15 } },
  };

  const onDragEnd = (_, info) => {
    const { offset, velocity } = info;
    if (Math.abs(offset.x) > THROW_DISTANCE || Math.abs(velocity.x) > THROW_VELOCITY) {
      onThrow(Math.sign(offset.x || velocity.x));
    } else {
      animate(dragX, 0, { type: "spring", duration: 0.4, bounce: 0.25 });
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="rest"
      exit="exit"
      transition={{ type: "spring", duration: 0.45, bounce: 0.18 }}
      style={{ zIndex: 10 - depth, gridArea: "1 / 1" }}
      aria-hidden={isTop ? undefined : true}
      className={cn("w-full", !isTop && "pointer-events-none")}
    >
      <motion.div
        ref={cardRef}
        drag={isTop ? "x" : false}
        dragMomentum={false}
        dragElastic={0.9}
        onPointerDown={() => {
          draggedRef.current = false;
        }}
        onDragStart={() => {
          draggedRef.current = true;
        }}
        onDragEnd={onDragEnd}
        onTap={
          isTop
            ? () => {
                if (!draggedRef.current) onOpen();
              }
            : undefined
        }
        style={{ x: dragX, rotate: dragRotate, touchAction: "pan-y" }}
        role={isTop ? "button" : undefined}
        tabIndex={isTop ? 0 : -1}
        aria-label={isTop ? label : undefined}
        onKeyDown={(event) => {
          if (isTop && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            onOpen();
          }
        }}
        className={cn(
          "rounded-2xl border border-white/10 bg-ink-900 p-3 pb-0 shadow-soft",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          isTop && "cursor-grab active:cursor-grabbing",
        )}
      >
        <img
          src={photoUrl(photo.id, 960)}
          srcSet={`${photoUrl(photo.id, 480)} 480w, ${photoUrl(photo.id, 960)} 960w`}
          sizes="300px"
          width={photo.width}
          height={photo.height}
          alt={alt}
          draggable={false}
          decoding="async"
          style={{ backgroundColor: photo.color }}
          className="pointer-events-none block aspect-[4/5] w-full select-none rounded-lg object-cover"
        />
        {/* Polaroid chin: the pin's title, written in marker. */}
        <p className="flex h-12 items-center justify-center truncate px-2 font-marker text-lg text-white/80">
          {photo.title}
        </p>
      </motion.div>
    </motion.div>
  );
}

function RoundButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "relative grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/80",
        "transition-transform duration-150 ease-out active:scale-[0.97]",
        "[@media(hover:hover)_and_(pointer:fine)]:hover:border-white/30 [@media(hover:hover)_and_(pointer:fine)]:hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      )}
    >
      {children}
    </button>
  );
}

/*
 * The large view shares the deck's position: moving here moves the pile too,
 * so closing lands on the photo that was being looked at.
 */
function PhotoViewer({
  open,
  onClose,
  photo,
  index,
  count,
  copy,
  closeLabel,
  onPrevious,
  onNext,
}) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onNext, onPrevious]);

  return (
    <WarpDialog
      open={open}
      onClose={onClose}
      title={photo.title || copy.viewerTitle}
      eyebrow={`${index + 1} / ${count}`}
      closeLabel={closeLabel}
      className="max-w-xl"
    >
      <div className="flex flex-col items-center gap-5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={photo.id}
            src={photoUrl(photo.id, 960)}
            width={photo.width}
            height={photo.height}
            alt={photo.title || copy.photoAlt}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ backgroundColor: photo.color }}
            className="block max-h-[62dvh] w-auto max-w-full rounded-xl object-contain"
          />
        </AnimatePresence>
        <div className="flex items-center gap-4">
          <RoundButton label={copy.previousPhoto} onClick={onPrevious}>
            <ChevronLeft aria-hidden className="h-4 w-4" />
          </RoundButton>
          <RoundButton label={copy.nextPhoto} onClick={onNext}>
            <ChevronRight aria-hidden className="h-4 w-4" />
          </RoundButton>
        </div>
      </div>
    </WarpDialog>
  );
}
