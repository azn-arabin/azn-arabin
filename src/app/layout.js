import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { interFont } from "@/config/font.config";
import Providers from "@/components/providers";
import HandleTheme from "@/components/navigation/HandleTheme";

export const metadata = {
  title: "Arabin - Full Stack Developer",
  description:
    "A full stack software developer with expertise in " +
    "MERN stack, Laravel, NextJS and React Native",
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
