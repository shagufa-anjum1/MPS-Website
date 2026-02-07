/**
 * Mega Menu Type Definitions
 */

export interface MegaMenuItem {
  id: string;
  label: string;
  path?: string;
  image?: string;
  description?: string;
}

export interface MegaMenuCategory {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuConfig {
  label: string;
  path?: string;
  hasMegaMenu: boolean;
  columns?: number;
  categories?: MegaMenuCategory[];
  layout?: 'grid' | 'list' | 'featured';
}

export interface NavigationConfig {
  mainNav: MegaMenuConfig[];
}
