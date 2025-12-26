import type { Metadata } from "next";
import "./globals.css";
import ScrollManager from "./ScrollManager.client";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Nur Al Mahmud Mayen - Video Editor & Visual Storyteller",
  description: "Professional video editing portfolio showcasing documentary-style content, motion graphics, and cinematic storytelling. Specializing in Adobe Premiere Pro and After Effects.",
  keywords: ["video editor", "video editing", "documentary editing", "motion graphics", "visual storytelling", "premiere pro", "after effects", "content creator"],
  authors: [{ name: "Nur Al Mahmud Mayen" }],
  creator: "Nur Al Mahmud Mayen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Nur Al Mahmud Mayen - Video Editor & Visual Storyteller",
    description: "Professional video editing portfolio showcasing documentary-style content, motion graphics, and cinematic storytelling.",
    siteName: "Mayen Portfolio",
    images: [
      {
        url: "/IMG_7416.png",
        width: 1200,
        height: 630,
        alt: "Nur Al Mahmud Mayen - Video Editor Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Al Mahmud Mayen - Video Editor & Visual Storyteller",
    description: "Professional video editing portfolio showcasing documentary-style content, motion graphics, and cinematic storytelling.",
    images: ["/IMG_7416.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/gmail.png" as="image" />
        <link rel="preload" href="/linkedin.png" as="image" />
        <link rel="preload" href="/instagram.png" as="image" />
        <link rel="preload" href="/whatsapp.png" as="image" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ScrollManager />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
