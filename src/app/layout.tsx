import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Han Su Yin (Cynthia) | Developer Portfolio",
  description: "Portfolio of Han Su Yin (Cynthia), Computer Science student and A.I Innovative Intern in Bangkok.",
  openGraph: {
    title: "Han Su Yin (Cynthia) | Developer Portfolio",
    description: "Computer Science student, builder, and A.I Innovative Intern.",
    images: [{ url: "/assets/profile/profile.jpg", width: 1200, height: 630, alt: "Han Su Yin (Cynthia)" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/profile/profile.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
