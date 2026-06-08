import { motion } from 'motion/react';
import {
  CreditCard,
  Compass,
  Target,
  Sparkles,
  Users,
  Rocket,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';

// Order matches t.product.items:
// Payments & Fintech, Product Discovery, Prioritization & Strategy,
// AI-Powered Solutions, Stakeholder Alignment, Product Delivery
const ICONS = [CreditCard, Compass, Target, Sparkles, Users, Rocket];

export default function ProductExecution() {
  const { t } = useLanguage();

  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.product.eyebrow}
          title={t.product.title}
          description={t.product.description}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.product.items.map((item, i) => {
            const Icon = ICONS[i] || Compass;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card card-hover edge-glow"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06]"
                  style={{ color: 'rgb(var(--accent-soft))' }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
