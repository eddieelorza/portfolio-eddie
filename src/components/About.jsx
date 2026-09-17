import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { GradientWord } from "./AnimatedText.jsx";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import coderVideoHevc from "../assets/eddie-coder.mov";
import coderVideoWebm from "../assets/eddie-coder.webm";
import coderPoster from "../assets/eddie-coder-poster.webp";
import avatarImg from "../assets/avatar.webp";

const tagsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const tagSharpen = {
  hidden: { opacity: 0, scale: 0.9, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 420, damping: 18 },
  },
};

// Keywords highlighted with GradientWord. Lowercased + simple punctuation
// stripped at match time so we hit "producto" inside "producto,".
const HIGHLIGHT_KEYWORDS = new Set([
  "producto",
  "productos",
  "product",
  "products",
  "fintech",
  "ia",
  "ai",
  "pspo",
  "msc",
]);

function stripWord(word) {
  return word.toLowerCase().replace(/[.,;:!?()]/g, "");
}

function HighlightedText({ children }) {
  return (
    <>
      {children.split(" ").map((word, i) => {
        const stripped = stripWord(word);
        const highlight = HIGHLIGHT_KEYWORDS.has(stripped);
        return (
          <span key={i}>
            {highlight ? <GradientWord>{word}</GradientWord> : word}{" "}
          </span>
        );
      })}
    </>
  );
}

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  // Subtle parallax on the decorative accent blob — drifts as the user
  // scrolls past About. Progress is measured against the section itself, not
  // absolute scrollY, so the drift survives reordering the page.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  return (
    <section
      ref={sectionRef}
      id="sobre-mi"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <motion.div
        aria-hidden
        style={{
          y: blobY,
          background: "rgb(var(--accent) / 0.32)",
        }}
        className="pointer-events-none absolute right-[-12%] top-[18%] h-72 w-72 rounded-full opacity-25 blur-3xl"
      />

      <div className="container-page">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-relaxed text-white/70"
          >
            <p>
              <HighlightedText>{t.about.p1}</HighlightedText>
            </p>
            <p>
              <HighlightedText>{t.about.p2}</HighlightedText>
            </p>
            {t.about.p3 && (
              <p>
                <HighlightedText>{t.about.p3}</HighlightedText>
              </p>
            )}
          </motion.div>

          <div className="relative">
          <Polaroid alt={t.about.photoAlt} caption={t.about.photoCaption} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card edge-glow shimmer-border relative z-0"
          >
            <motion.ul
              variants={tagsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ ...REVEAL_VIEWPORT, amount: 0.15 }}
              className="space-y-3"
            >
              {t.about.tags.map((tag) => (
                <motion.li
                  key={tag}
                  variants={tagSharpen}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: "rgb(var(--accent))" }}
                  />
                  <span className="text-sm font-medium text-white/85">
                    {tag}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * The marker portrait, animated as a looping video with a transparent
 * background (black keyed out and the generator watermark erased offline).
 * Safari only plays alpha from HEVC, Chrome/Firefox from VP9 WebM; Chrome
 * skips the QuickTime source, so the order matters.
 * Loading: only the poster (first frame, ~50 KB) ships with the page. The
 * sources are attached when the figure gets near the viewport, and playback
 * pauses while it is off screen. Reduced motion never downloads the video.
 * Looping: we jump back to 0 just before the last frame instead of relying on
 * `loop` alone — Safari can blank an HEVC-alpha video on `ended`, which left
 * the figure transparent for a moment. `loop` stays as a fallback.
 * Lands with a small settle when it scrolls into view.
 */
const LOOP_EPSILON = 1.5 / 24; // a frame and a half at 24 fps

function Polaroid({ alt, caption }) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Attach the sources near the viewport; play/pause with visibility.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          if (video.currentSrc) video.play().catch(() => {});
        } else if (video.currentSrc) {
          video.pause();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  // <source> children added after mount are ignored until load() runs.
  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video) return;
    video.load();
    video.play().catch(() => {});
  }, [shouldLoad]);

  // Seamless loop: restart before the clip reaches `ended`.
  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video) return;
    let handle;
    const useFrameCallback = "requestVideoFrameCallback" in video;
    const check = () => {
      if (video.duration && video.currentTime >= video.duration - LOOP_EPSILON) {
        video.currentTime = 0;
      }
      handle = useFrameCallback
        ? video.requestVideoFrameCallback(check)
        : requestAnimationFrame(check);
    };
    check();
    return () =>
      useFrameCallback
        ? video.cancelVideoFrameCallback(handle)
        : cancelAnimationFrame(handle);
  }, [shouldLoad]);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="relative z-10 mx-auto mb-10 w-full max-w-[440px]"
    >
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgb(var(--accent) / 0.35), rgb(var(--accent-glow) / 0.35))",
          transform: "translateZ(0)",
        }}
      />
      <video
        ref={videoRef}
        poster={coderPoster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={alt}
        width="720"
        height="596"
        className="relative block h-auto w-full"
      >
        {shouldLoad && (
          <>
            <source src={coderVideoHevc} type='video/quicktime; codecs="hvc1"' />
            <source src={coderVideoWebm} type="video/webm" />
          </>
        )}
      </video>

      <figcaption className="absolute -bottom-4 left-1/2 -translate-x-1/2 -rotate-3">
        <span
          className="block whitespace-nowrap rounded-xl px-4 py-2 font-display text-base font-bold shadow-soft"
          style={{ background: "rgb(var(--fg))", color: "rgb(var(--ink-950))" }}
        >
          {caption}
        </span>
      </figcaption>

      <span
        aria-hidden
        className="absolute -bottom-6 right-0 grid aspect-square w-20 rotate-[10deg] place-items-center overflow-hidden rounded-full border-[3px] border-white shadow-soft"
        style={{ background: "rgb(var(--ink-900))" }}
      >
        <img src={avatarImg} alt="" loading="lazy" width="80" height="80" className="h-full w-full object-contain" />
      </span>
    </motion.figure>
  );
}
