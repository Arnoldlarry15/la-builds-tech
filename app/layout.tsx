import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LA Builds - Independent AI Research & Development Lab',
  description: 'Independent AI research and development lab specializing in custom AI workflows, automation systems, adversarial testing, and intelligent tooling.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
