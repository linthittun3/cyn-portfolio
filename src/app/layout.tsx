import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Han Su Yin (Cynthia) | Developer Portfolio",
  description: "Portfolio of Han Su Yin (Cynthia), Computer Science student and A.I Innovative Intern in Bangkok.",
  openGraph: { title: "Han Su Yin (Cynthia) | Developer Portfolio", description: "Computer Science student, builder, and A.I Innovative Intern." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
