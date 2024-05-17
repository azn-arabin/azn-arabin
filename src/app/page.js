import MyHome from "@/components/landing/home/home";
import Header from "@/components/common/header";
import About from "@/components/landing/about/about";
import Services from "@/components/landing/services";
import Portfolio from "@/components/landing/portfolio/portfolio";
import Contact from "@/components/landing/contact/contact";
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
