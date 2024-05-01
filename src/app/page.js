import MyHome from "@/sections/home";
import Header from "@/components/common/header";
import About from "@/sections/about";
import Services from "@/sections/services";
import Portfolio from "@/sections/portfolio";
import Contact from "@/sections/contact";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
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
  );
}
