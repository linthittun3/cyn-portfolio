import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hansuyin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Han Su Yin (Cynthia) | Computer Science Student & Developer",
    template: "%s | Han Su Yin (Cynthia)",
  },
  description:
    "Explore the portfolio of Han Su Yin (Cynthia), a Computer Science student at Stamford International University, AI Innovation Intern, and aspiring web developer in Bangkok, Thailand.",
  keywords: [
    "Han Su Yin",
    "Han Su Yin Cynthia",
    "Cynthia Yin",
    "Computer Science student",
    "web developer Bangkok",
    "AI Innovation Intern",
    "Stamford International University",
  ],
  authors: [{ name: "Han Su Yin (Cynthia)" }],
  creator: "Han Su Yin (Cynthia)",
  publisher: "Han Su Yin (Cynthia)",
  verification: {
    google: "34Eyp-61IbT-SneF9qaHfrlJcyNXqU3Qes40JxGCNW4",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Han Su Yin (Cynthia) Portfolio",
    title: "Han Su Yin (Cynthia) | Computer Science Student & Developer",
    description:
      "Computer Science student, AI Innovation Intern, and aspiring web developer in Bangkok, Thailand.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Han Su Yin (Cynthia) developer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Han Su Yin (Cynthia) | Computer Science Student & Developer",
    description:
      "Computer Science student, AI Innovation Intern, and aspiring web developer in Bangkok, Thailand.",
    images: ["/og-image.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Han Su Yin",
  alternateName: "Han Su Yin (Cynthia)",
  url: siteUrl,
  image: `${siteUrl}/images/profile/profile.jpg`,
  jobTitle: "AI Innovation Intern",
  description:
    "Computer Science student, AI Innovation Intern, and aspiring web developer based in Bangkok, Thailand.",
  email: "2306090004@students.stamford.edu",
  address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Stamford International University" },
  sameAs: [
    "https://www.linkedin.com/in/hansuyin157",
    "https://github.com/thecynthiayin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
