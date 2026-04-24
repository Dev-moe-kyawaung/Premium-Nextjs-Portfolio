import "./globals.css";
import Navbar from "@/components/Navbar";
import portfolioData from "@/data/portfolio";

export const metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  metadataBase: new URL(portfolioData.seo.siteUrl),
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    url: portfolioData.seo.siteUrl,
    siteName: portfolioData.profile.name,
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: `${portfolioData.profile.name} Portfolio Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    images: ["/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
