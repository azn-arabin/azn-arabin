import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/context/context";

export const metadata = {
  title: "Arabin - Full Stack Developer",
  description:
    "A full stack software developer with expertise in " +
    "MERN stack, Laravel, NextJS and React Native",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>{children}</ThemeProvider>
    </html>
  );
}
