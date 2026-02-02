export default function manifest() {
  return {
    name: "Arabin - Full Stack Developer",
    short_name: "Arabin",
    description:
      "Full-stack developer portfolio showcasing MERN stack, Next.js, Laravel, and React Native projects",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#c2e7ff",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
