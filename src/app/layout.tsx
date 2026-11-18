import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Han Su Yin (Cynthia) | Portfolio",
  description: "Portfolio of Han Su Yin (Cynthia), Computer Science student and A.I Innovative Intern in Bangkok.",
  openGraph: { title: "Han Su Yin (Cynthia) | Portfolio", description: "Computer Science student, builder, and A.I Innovative Intern.", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Han Su Yin (Cynthia) developer portfolio preview" }] },
  twitter: { card: "summary_large_image", title: "Han Su Yin (Cynthia) | Portfolio", description: "Computer Science student, builder, and A.I Innovative Intern.", images: ["/og-image.jpg"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
