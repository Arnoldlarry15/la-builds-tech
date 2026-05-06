import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LA Builds - AI Systems Engineering',
  description: 'Custom AI workflows, automation systems, and intelligent tooling for modern businesses and builders.',
  viewport: 'width=device-width, initial-scale=1',
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
