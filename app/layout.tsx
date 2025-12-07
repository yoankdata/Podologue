import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// 1. TYPOGRAPHIE : Configuration optimisée
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Évite le texte invisible au chargement
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

// 2. VIEWPORT : Séparé des métadonnées (Standard Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#ffffff", // À adapter à ta couleur de marque
  width: "device-width",
  initialScale: 1,
};

// 3. METADATA : SEO Local & Social (Indispensable pour un cabinet)
export const metadata: Metadata = {
  title: {
    template: "%s | Vanessa LAGARRIGUE",
    default: "Podologue Toulouse Sept Deniers - Vanessa LAGARRIGUE | Pédicurie & Posturologie",
  },
  description: "Cabinet de Pédicurie-Podologie à Toulouse Sept Deniers. Spécialiste du sport, posturologie et semelles orthopédiques sur-mesure. Bilan complet et soins.",
  keywords: ["Podologue Toulouse", "Pédicure Toulouse", "Sept Deniers", "Semelles orthopédiques", "Posturologie", "Podologie du sport", "Vanessa Lagarrigue"],
  authors: [{ name: "Vanessa LAGARRIGUE" }],
  creator: "Vanessa LAGARRIGUE",
  publisher: "Vanessa LAGARRIGUE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph = Apparence sur Facebook/LinkedIn/WhatsApp
  openGraph: {
    title: "Cabinet de Podologie - Vanessa LAGARRIGUE",
    description: "Expertise en Pédicurie, Podologie du Sport et Posturologie à Toulouse Sept Deniers.",
    url: "https://lagarrigue-podologue.fr", // URL potentielle
    siteName: "Cabinet Vanessa LAGARRIGUE",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 4. SCHEMA.ORG : Pour Google Maps et le Knowledge Graph
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician", // Ou 'MedicalBusiness'
  "name": "Cabinet de Pédicurie-Podologie Vanessa LAGARRIGUE",
  "image": "https://lagarrigue-podologue.fr/images/bureau-consultation.jpg",
  "telephone": "05 61 57 42 42",
  "url": "https://lagarrigue-podologue.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "98 Route de Blagnac",
    "addressLocality": "Toulouse",
    "postalCode": "31200",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.619896,
    "longitude": 1.416805
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday"],
      "opens": "08:00",
      "closes": "18:30"
    }
  ],
  "medicalSpecialty": "Podiatry",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${sourceSerif.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)] selection:bg-primary selection:text-white">

        {/* Injection du JSON-LD pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navbar />

        <main className="flex-1 w-full max-w-[1440px] mx-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}