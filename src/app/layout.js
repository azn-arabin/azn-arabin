import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { interFont } from "@/config/font.config";
import Providers from "@/components/providers";
import HandleTheme from "@/components/navigation/HandleTheme";

export const metadata = {
  title: "Arabin - Full Stack Developer",
  description:
    "A full stack software developer with expertise in " +
    "MERN stack, Laravel, NextJS and React Native",
  keywords:
    "full stack developer, MERN stack, NextJS, Laravel, React Native, web development",
  authors: [{ name: "Md. Asaduzzman (Arabin)" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1f1f" },
  ],
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
