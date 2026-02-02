import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { interFont } from "@/config/font.config";
import Providers from "@/components/providers";
import HandleTheme from "@/components/navigation/HandleTheme";

export const metadata = {
  metadataBase: new URL("https://arabin.vercel.app"),
  title:
    "Arabin - Full Stack Developer | MERN, Next.js, Laravel & React Native",
  description:
    "Experienced full-stack developer specializing in MERN stack, Next.js, Laravel, and React Native. Building scalable web and mobile applications with clean architecture and exceptional user experience. 3+ years of professional experience.",
  keywords:
    "full stack developer, MERN stack developer, Next.js developer, Laravel developer, React Native developer, web development, mobile app development, TypeScript, Node.js, React, MongoDB, Firebase, Tailwind CSS, software engineer, portfolio",
  authors: [{ name: "Md. Asaduzzman (Arabin)" }],
  creator: "Md. Asaduzzman (Arabin)",
  publisher: "Md. Asaduzzman (Arabin)",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1f1f" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arabin.vercel.app/",
    siteName: "Arabin - Full Stack Developer",
    title:
      "Arabin - Full Stack Developer | MERN, Next.js, Laravel & React Native",
    description:
      "Experienced full-stack developer specializing in MERN stack, Next.js, Laravel, and React Native. Building scalable web and mobile applications.",
    images: [
      {
        url: "https://arabin.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Arabin - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arabin - Full Stack Developer | MERN, Next.js, Laravel & React Native",
    description:
      "Experienced full-stack developer specializing in MERN stack, Next.js, Laravel, and React Native.",
    images: ["https://arabin.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://arabin.vercel.app/",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Google Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
      <Providers>
        <HandleTheme>{children}</HandleTheme>
      </Providers>
    </html>
  );
}
