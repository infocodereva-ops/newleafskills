export type ComparisonSample = 'eagle' | 'tiger';

export type CategoryKey = 'cap' | 'puff' | 'jacket' | 'crest' | 'patch' | 'vector';

export interface WorkProject {
  id: number;
  title: string;
  category: string;
  image: string;
  tag: string;
  stitches: string;
  colors: string;
  fabric: string;
  machine: string;
  turnaround: string;
  description: string;
  punchingNotes: string;
}
