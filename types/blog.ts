export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
  keyTakeaways?: string[];
  commentsCount?: number;
}

export type BlogSortOption = 'newest' | 'oldest' | 'readTime' | 'title';
