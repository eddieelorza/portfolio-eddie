/**
 * Theme color palette presented by the ThemeColorDock.
 * Mirrors the active themes registered in ThemeContext.jsx.
 */
export { THEMES as THEME_COLORS } from '../contexts/ThemeContext.jsx';

/**
 * localStorage key persisting whether the dock's first-load tooltip
 * has already been shown to the user. Read by ThemeColorDock.
 */
export const THEME_DOCK_TOOLTIP_FLAG = 'eddie-portfolio-theme-dock-tooltip-shown';
