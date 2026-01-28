import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { ThemeProvider } from '@/components/ThemeProvider';
import { MarylandSEOSchema } from '@/components/MarylandSEOSchema';
import { CrispChat } from '@/components/CrispChat';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ToastProvider } from '@/components/Toast';

export const metadata: Metadata = {
  title: 'Bella Healthcare Services | OHCQ Licensed In-Home Senior Care Across All Maryland Counties',
  description: 'Professional, compassionate in-home senior care throughout Maryland. OHCQ licensed. Serving Baltimore, Frederick, Anne Arundel, Howard, Montgomery, Prince George\'s, and all 24 Maryland counties. Licensed Non-Expiring RSA.',
  keywords: 'home care Maryland, senior care, in-home care Maryland, Laurel, Baltimore, elderly care, dementia care, personal care, OHCQ licensed, Maryland counties',
  openGraph: {
    title: 'Bella Healthcare Services | Maryland Senior In-Home Care',
    description: 'Compassionate, professional in-home care for seniors across all of Maryland',
    url: 'https://bellahealthcare.md',
    siteName: 'Bella Healthcare Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bella Healthcare Services | Maryland Senior Care',
    description: 'Professional in-home care for seniors across Maryland counties',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003D82" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-weight='bold' fill='%23D4A574'>B</text></svg>" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ToastProvider>
            <ErrorBoundary>
              <MarylandSEOSchema />
              <Navbar />
              <main role="main">{children}</main>
              <Footer />
              <Analytics />
              <CrispChat />
            </ErrorBoundary>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
