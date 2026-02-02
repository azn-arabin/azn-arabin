import dynamic from "next/dynamic";
import MyHome from "@/components/landing/home/home";
import Header from "@/components/common/header";

// Dynamic imports with loading states for better performance
const About = dynamic(() => import("@/components/landing/about/about"), {
  loading: () => <div className="h-screen" />,
});
const Services = dynamic(() => import("@/components/landing/services"), {
  loading: () => <div className="h-screen" />,
});
const Portfolio = dynamic(
  () => import("@/components/landing/portfolio/portfolio"),
  {
    loading: () => <div className="h-screen" />,
  },
);
const Contact = dynamic(() => import("@/components/landing/contact/contact"), {
  loading: () => <div className="h-screen" />,
});
const Footer = dynamic(() => import("@/components/common/footer"), {
  loading: () => <div className="h-32" />,
});

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
