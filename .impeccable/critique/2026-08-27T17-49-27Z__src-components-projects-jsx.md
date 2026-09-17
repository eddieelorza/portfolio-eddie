---
target: sección de proyectos
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-08-27T17-49-27Z
slug: src-components-projects-jsx
---
Method: dual-agent (A: design review · B: detector + browser evidence)
Surface mode: Experience (portfolio). Heuristics 7 and 10 scored n/a.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | ArrowUpRight on every card; 0 focusable elements, cursor:auto, no links. |
| 2 | Match System / Real World | 3 | `metrics` contain no metrics on 3 of 4 cards; ES/EN use different product names for the hotel project. |
| 3 | User Control and Freedom | 1 | `touch-action:none` on all cards → scroll trap on touch. |
| 4 | Consistency and Standards | 2 | Card is a structural clone of the Experience card; 2px/18px border+radius diverge from site `.card`. |
| 5 | Error Prevention | 2 | Design invites a click it cannot satisfy; positional ICONS array must be hand-extended. |
| 6 | Recognition Rather Than Recall | 3 | Only per-card differentiator is a 20px glyph. |
| 7 | Flexibility and Efficiency | n/a | One-time reader; no repeat-use path. |
| 8 | Aesthetic and Minimalist Design | 2 | 83.3px hanging dead space under Paga Fácil; no content ranking. |
| 9 | Error Recovery | 2 | False-affordance arrow is a dead end; `noDemoLabel` written but never rendered. |
| 10 | Help and Documentation | n/a | No task to complete. |
| **Total** | | **17/32 (53%)** | Needs work |

## Design Specificity Verdict

Category-interchangeable, and worse: it is the second such grid on the page. `Experience.jsx` renders the same card skeleton for the same three projects with sharper copy (`~6M transacciones diarias` there vs `Alto volumen de transacciones diarias` here). The copy layer already shipped `figures`, `internal`, `noDemoLabel` and `viewLabel`; `Projects.jsx` rendered none of them.

Deterministic scan: `detect.mjs` returned 0 findings, exit 0. Browser overlay ran (live-server on :8400, stopped): 8 findings scoped to `#proyectos` — 1 gradient-text (SectionHeading h2), 4 radial-spotlight-glow (edge-glow), 2 ai-color-palette, 1 all-caps-body. B flagged ai-color-palette and all-caps-body selectivity as unreliable (fired on 2 of 4 and 1 of 4 identical elements).

Contrast: all text passes AA on every theme. Floor is the card tag at 6.88:1 (purple). Two non-text failures: chip border 1.30:1 and card border 1.08:1 against 3:1.

## Priority Issues

- **[P0] `touch-action:none` blocks page scroll over the cards.** GlowCard set it for a hover-only spotlight. Cards cover 131% of the section height, so a thumb drag anywhere in Projects did not scroll. FIXED.
- **[P0] Four arrows promised links that do not exist.** 0 focusable elements section-wide; three projects can never have a link. FIXED — arrow only when `href`; internal projects show `noDemoLabel` with a Lock chip.
- **[P1] `figures` written and never rendered.** `~6M`, `500+`, `4`, `10/~35/~1,500` sat unused while `metrics` showed unquantified paraphrases. FIXED — figures strip at 24px, now the card's typographic peak.
- **[P1] 83.3px hanging dead space + squashed bullet dots.** Equal-height rows dumped slack below the chip row; dots lacked `shrink-0` and rendered as low as 2.21×6px ellipses, vertically centred mid-paragraph. FIXED — `mt-auto` on the stack row, `items-start` + `shrink-0` + `mt-[0.45rem]` on dots.
- **[P2] Section sits at 57% page depth and duplicates Experience.** Content problem, not CSS. Not fixed.
- **[P3] 11px chips, `once:false` reveals, ES/EN product-name split.** Chip override removed as part of P1; the other two not fixed.

## Persona Red Flags

- Recruiter on a phone: could not scroll over the cards; found no number larger than 20px; four arrows invited dead taps.
- Hiring engineering manager: saw the same three projects twice, second time with the numbers removed; stack set in 11px at 70% opacity.
- Keyboard/screen-reader: zero focusable elements in the section; all 8 svgs unlabelled and not aria-hidden; `grep focus-visible src/index.css` → no matches site-wide.

## Minor Observations

- `themeToGlow` is an identity map wrapped in useMemo.
- `<div data-glow>` is an empty div with no matching CSS.
- `--outer`, `--saturation`, `--lightness`, `--bg-spot-opacity` declared but unused in GlowCard.
- `key={p.title}` uses a translated string as a key contract.
