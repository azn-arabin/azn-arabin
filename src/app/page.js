import dynamic from "next/dynamic";
import MyHome from "@/components/landing/home/home";
import Header from "@/components/common/header";
import Script from "next/script";

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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Asaduzzman (Arabin)",
  alternateName: "Arabin",
  url: "https://arabin.vercel.app",
  image: "https://arabin.vercel.app/logo.png",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
    "Experienced full-stack developer specializing in MERN stack, Next.js, Laravel, and React Native. Building scalable web and mobile applications.",
  sameAs: [
    "https://github.com/azn-arabin",
    "https://linkedin.com/in/azn-arabin",
    "https://leetcode.com/azn-arabin/",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Laravel",
    "React Native",
    "Firebase",
    "Tailwind CSS",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Your University Name", // Update with actual university
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
    </>
  );
}
