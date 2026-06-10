import {
  BarChart3,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Layers,
  Mail,
  User,
  Workflow,
} from 'lucide-react';

/**
 * Central source of truth for the site's section-based navigation.
 *  - `id`        → matches the section's DOM id (used by anchors + observer)
 *  - `labelKey`  → key in t.nav (resolved per language at render time)
 *  - `icon`      → lucide icon for the mobile bottom nav
 *  - `desktop`   → whether the section appears in the top desktop nav
 *  - `bottomNav` → whether the section appears in the mobile bottom dock
 */
export const NAV_ITEMS = [
  { id: 'sobre-mi',    labelKey: 'about',      icon: User,           desktop: true,  bottomNav: true  },
  { id: 'experiencia', labelKey: 'experience', icon: Briefcase,      desktop: true,  bottomNav: true  },
  { id: 'producto',    labelKey: 'product',    icon: Workflow,       desktop: true,  bottomNav: true  },
  { id: 'estudios',    labelKey: 'education',  icon: GraduationCap,  desktop: true,  bottomNav: true  },
  { id: 'proyectos',   labelKey: 'projects',   icon: FolderKanban,   desktop: true,  bottomNav: true  },
  { id: 'stack',       labelKey: 'stack',      icon: Layers,         desktop: true,  bottomNav: true  },
  { id: 'impacto',     labelKey: 'impact',     icon: BarChart3,      desktop: true,  bottomNav: true  },
  { id: 'contact',     labelKey: 'contact',    icon: Mail,           desktop: false, bottomNav: true  },
];

/** Top-of-page anchor used by the logo. */
export const HERO_ID = 'top';

/**
 * Every observed section id — the hero is included so the active-section
 * hook knows when the user is still at the top of the page. Consumers
 * that render UI per section (DesktopHeader, MobileBottomNav) should
 * still iterate `NAV_ITEMS` directly and ignore `HERO_ID`.
 */
export const NAV_SECTION_IDS = [HERO_ID, ...NAV_ITEMS.map((item) => item.id)];
