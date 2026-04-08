import type { Metadata } from "next";
import { Syne, DM_Sans, IBM_Plex_Mono, Inter, Sora, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth";
import { getOrgBranding } from "@/lib/branding";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "AssessOS — Enterprise Exam Platform",
    template: "%s | AssessOS",
  },
  description:
    "Enterprise-grade multi-tenant online exam and proctoring platform. Create, manage, and proctor assessments at scale.",
  keywords: [
    "online exam",
    "proctoring",
    "assessment",
    "enterprise",
    "exam platform",
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const branding = await getOrgBranding();

  const fontMap: Record<string, string> = {
    'inter': 'var(--font-inter)',
    'dm_sans': 'var(--font-dm-sans)',
    'sora': 'var(--font-sora)',
    'nunito': 'var(--font-nunito)',
    'poppins': 'var(--font-poppins)',
  };

  const selectedFont = fontMap[branding.font_family] || 'var(--font-dm-sans)';

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${ibmPlexMono.variable} ${inter.variable} ${sora.variable} ${nunito.variable} ${poppins.variable}`}
      style={{
        '--brand-primary': branding.primary_color,
        '--brand-secondary': branding.secondary_color,
        '--font-body': selectedFont,
      } as React.CSSProperties}
    >
      <head>
        {branding.favicon_url && (
          <link rel="icon" href={branding.favicon_url} />
        )}
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
