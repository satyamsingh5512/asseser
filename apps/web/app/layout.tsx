import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth";
import { getOrgBranding } from "@/lib/branding";

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
    inter: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    dm_sans: "'DM Sans', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    sora: "Sora, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    nunito: "Nunito, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    poppins: "Poppins, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const selectedFont = fontMap[branding.font_family] || fontMap.dm_sans;

  return (
    <html
      lang="en"
      style={{
        "--brand-primary": branding.primary_color,
        "--brand-secondary": branding.secondary_color,
        "--font-body": selectedFont,
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
