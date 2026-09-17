import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import PhotoDeck, { photoUrl } from "./personal/PhotoDeck.jsx";
import VinylPlayer from "./personal/VinylPlayer.jsx";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import photos from "../data/gallery.json";

/*
 * "Fuera del código": two objects on a table — a pile of travel polaroids and
 * a record on a turntable.
 *
 * Photos are synced at build time by scripts/sync-pinterest.mjs into
 * src/assets/gallery plus src/data/gallery.json (newest first, with the pin
 * title when it has one).
 */
const EASE_OUT = [0.23, 1, 0.32, 1];
const PINTEREST_BOARD = "https://www.pinterest.com/Heeeyedd/travel/";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: REVEAL_VIEWPORT,
  transition: { duration: 0.55, ease: EASE_OUT, delay },
});

export default function Personal() {
  const { t } = useLanguage();
  const copy = t.personal;
  const available = photos.filter((photo) => photoUrl(photo.id, 480));

  return (
    <section id="personal" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mx-auto grid max-w-5xl items-start gap-14 md:grid-cols-2 md:gap-12">
          <motion.div {...reveal()} className="flex flex-col items-center">
            <PhotoDeck photos={available} copy={copy} closeLabel={t.a11y.close} />
            <a
              href={PINTEREST_BOARD}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {copy.pinterestCta}
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div {...reveal(0.1)}>
            <VinylPlayer copy={copy} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
