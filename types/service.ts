export interface ServiceSubItem {
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  num: string;
  title: string;
  tag: string;
  badge: string;
  category: string;
  image: string;
  secondaryImage?: string;
  shortDesc: string;
  fullDesc: string[];
  keyHighlights: string[];
  subOfferings: ServiceSubItem[];
  fabrics: string[];
  machineFormats: string[];
  turnaround: string;
  revisions: string;
  targetIndustries: string[];
}

export type ServiceCategoryKey = 'All' | 'Digitizing Services' | 'Computerized Stitching' | 'Apparel & Uniforms' | 'Liturgical & Sacred';
