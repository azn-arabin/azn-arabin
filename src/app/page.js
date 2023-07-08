"use client";
import MyHome from "@/sections/home";
import { themeContext } from "@/context/context";
import { useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Header from "@/components/common/header";
import About from "@/sections/about";
import Services from "@/sections/services";
import Portfolio from "@/sections/portfolio";
import Contact from "@/sections/contact";
import Footer from "@/components/common/footer";
import { firebaseConfig } from "@/config/firebase";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const app = initializeApp(firebaseConfig);

export let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export default function Home() {
  const theme = useContext(themeContext);
  const lightTheme = theme.state.lightTheme;

  return (
    <body
      className={`${inter.className} ${lightTheme ? "" : "theme-dark"}`}
      style={{
        backgroundColor: "var(--main-bg)",
        color: "var(--text-color)",
      }}
    >
      <main>
        <div className={"header-home"}>
          <Header />
          <MyHome />
        </div>
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </body>
  );
}
