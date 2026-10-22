import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work & Authentic Sewout Portfolio | NewLeafSkills Studio',
  description: 'Explore commercial embroidery sewouts hand-punched by 22+ year veteran digitizers. Over 50,000+ files digitized for Tajima, Barudan, Brother, and Melco machines with 6-8 hour turnaround.',
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
