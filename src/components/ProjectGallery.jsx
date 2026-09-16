import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WarpDialog from "./ui/WarpDialog.jsx";
import pfMontoImg from "../assets/projects/paga-facil/monto.webp";
import pfMetodoImg from "../assets/projects/paga-facil/metodo.webp";
import pfTarjetaImg from "../assets/projects/paga-facil/tarjeta.webp";
import pfResumenImg from "../assets/projects/paga-facil/resumen.webp";
import pfComprobanteImg from "../assets/projects/paga-facil/comprobante.webp";
import portafolioImg from "../assets/projects/sistema-regional/portafolio.webp";
import portafolioClientesImg from "../assets/projects/sistema-regional/portafolio-clientes.webp";
import portafolioPedidosImg from "../assets/projects/sistema-regional/portafolio-pedidos.webp";
import usuariosImg from "../assets/projects/sistema-regional/usuarios.webp";
import cambioImg from "../assets/projects/sistema-regional/usuarios-cambio.webp";
import resultadoImg from "../assets/projects/sistema-regional/usuarios-resultado.webp";
import creditoImg from "../assets/projects/sistema-regional/informacion-crediticia.webp";
import crmCumplimientoImg from "../assets/projects/crm-hotelero/cumplimiento.webp";
import crmEquipoHoyImg from "../assets/projects/crm-hotelero/equipo-hoy.webp";
import crmPipelineImg from "../assets/projects/crm-hotelero/pipeline.webp";
import crmKanbanImg from "../assets/projects/crm-hotelero/kanban.webp";
import crmFichaImg from "../assets/projects/crm-hotelero/ficha.webp";
import crmConveniosImg from "../assets/projects/crm-hotelero/convenios.webp";
import tastifyPedidoImg from "../assets/projects/tastify/pedido-en-vivo.webp";
import tastifyCuentaImg from "../assets/projects/tastify/cuenta-dividida.webp";
import octoArchivosImg from "../assets/projects/octobile/archivos.webp";
import octoChatImg from "../assets/projects/octobile/chat.webp";
import octoOnboardingImg from "../assets/projects/octobile/onboarding.webp";
import octoPerfilImg from "../assets/projects/octobile/perfil.webp";
import octoRegistroImg from "../assets/projects/octobile/registro.webp";
import octoPassImg from "../assets/projects/octobile/password-tip.webp";
import octoBotonImg from "../assets/projects/octobile/boton-flotante.webp";
import octoOpcionesImg from "../assets/projects/octobile/boton-opciones.webp";
import eosReviewImg from "../assets/projects/english-os/review-sitting.webp";
import eosReaderImg from "../assets/projects/english-os/interactive-reader.webp";
import eosStatsImg from "../assets/projects/english-os/stats-evidence.webp";
/**
 * Screens are keyed by name so translations.js stays free of asset imports:
 * each project lists `gallery: [{ image: "monto", caption }]` and the key is
 * resolved here.
 */
/*
 * Own work only. Screenshots of employer software stay out of the repo; what
 * lives here are my own recreations (drawn from scratch, no brand, fictitious
 * data) and screens of products I own or the client approved.
 */
export const PROJECT_IMAGES = {
  "pf-monto": pfMontoImg,
  "pf-metodo": pfMetodoImg,
  "pf-tarjeta": pfTarjetaImg,
  "pf-resumen": pfResumenImg,
  "pf-comprobante": pfComprobanteImg,
  portafolio: portafolioImg,
  "portafolio-clientes": portafolioClientesImg,
  "portafolio-pedidos": portafolioPedidosImg,
  usuarios: usuariosImg,
  "usuarios-cambio": cambioImg,
  "usuarios-resultado": resultadoImg,
  "informacion-crediticia": creditoImg,
  "crm-cumplimiento": crmCumplimientoImg,
  "crm-equipo-hoy": crmEquipoHoyImg,
  "crm-pipeline": crmPipelineImg,
  "crm-kanban": crmKanbanImg,
  "crm-ficha": crmFichaImg,
  "crm-convenios": crmConveniosImg,
  "tastify-pedido": tastifyPedidoImg,
  "tastify-cuenta": tastifyCuentaImg,
  "octo-archivos": octoArchivosImg,
  "octo-chat": octoChatImg,
  "octo-onboarding": octoOnboardingImg,
  "octo-perfil": octoPerfilImg,
  "octo-registro": octoRegistroImg,
  "octo-password": octoPassImg,
  "octo-boton": octoBotonImg,
  "octo-opciones": octoOpcionesImg,
  "eos-review": eosReviewImg,
  "eos-reader": eosReaderImg,
  "eos-stats": eosStatsImg,
};

/**
 * `phone` screens are tall (430×932) and crop to their top in a 4-up row;
 * `desktop` screens are wide back-office tables and crop to their top-left
 * corner in a 2-up row, where the headers and first columns carry the idea.
 */
const VARIANTS = {
  phone: {
    grid: "grid-cols-4",
    thumb: "aspect-[3/4] object-top",
    dialog: "max-w-md",
    full: "mx-auto max-h-[68vh] w-auto rounded-2xl",
  },
  desktop: {
    // Five screens in a 2-up row would strand one alone; 3-up keeps the rows full.
    grid: "grid-cols-2",
    thumb: "aspect-[16/10] object-left-top",
    dialog: "max-w-5xl",
    full: "h-auto w-full rounded-xl",
  },
};

/**
 * ProjectGallery
 *
 * A row of phone-screen thumbnails inside a project card. Each thumbnail is a
 * button that opens the screen full size in the shared WarpDialog, which
 * already brings focus trapping, Escape, scroll lock and reduced motion.
 * Inside the viewer ←/→ step through the screens.
 *
 * Thumbnails crop to the top of the screen (aspect 3:4): the full 430×932
 * phone would make the card roughly twice as tall as its neighbour.
 */
export default function ProjectGallery({
  projectTitle,
  items,
  labels,
  variant = "phone",
  note,
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const v = VARIANTS[variant] ?? VARIANTS.phone;
  // A fifth screen would sit alone on a second row, so the row grows instead.
  const gridClass =
    items.length > 4
      ? variant === "desktop"
        ? "grid-cols-3"
        : "grid-cols-5"
      : v.grid;
  const caption = note ?? labels.note;
  const shots = items.filter((item) => PROJECT_IMAGES[item.image]);

  const isOpen = openIndex !== null;
  const current = isOpen ? shots[openIndex] : null;
  const step = (delta) =>
    setOpenIndex((i) => (i + delta + shots.length) % shots.length);

  // Arrow keys work wherever focus sits in the viewer — on open it lands on
  // the close button, which is outside the image area.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, shots.length]);

  if (shots.length === 0) return null;

  return (
    <div className="mt-5">
      <ul className={`grid gap-2 ${gridClass}`}>
        {shots.map((shot, i) => (
          <li key={shot.image}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`${labels.open}: ${shot.caption}`}
              className="group/shot block w-full overflow-hidden rounded-xl border border-white/10 bg-ink-800 transition hover:border-white/30"
            >
              <img
                src={PROJECT_IMAGES[shot.image]}
                alt=""
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition duration-300 group-hover/shot:scale-[1.03] ${v.thumb}`}
              />
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-white/50">{caption}</p>

      <WarpDialog
        open={isOpen}
        onClose={() => setOpenIndex(null)}
        title={current ? `${projectTitle} · ${current.caption}` : ""}
        closeLabel={labels.close}
        className={v.dialog}
      >
        {current && (
          <div>
            <figure>
              <img
                key={current.image}
                src={PROJECT_IMAGES[current.image]}
                alt={`${current.caption} — ${caption}`}
                className={`border border-white/10 ${v.full}`}
              />
              <figcaption className="mt-3 text-center text-xs text-white/55">
                {openIndex + 1} / {shots.length} · {caption}
              </figcaption>
            </figure>
            <div className="mt-4 flex justify-between gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                className="btn-ghost"
              >
                <ChevronLeft aria-hidden className="h-4 w-4" />
                {labels.prev}
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="btn-ghost"
              >
                {labels.next}
                <ChevronRight aria-hidden className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </WarpDialog>
    </div>
  );
}
