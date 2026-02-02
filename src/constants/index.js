import {
  UilDatabaseAlt,
  UilDesktopAlt,
  UilFacebook,
  UilGithub,
  UilInstagram,
  UilLinkedin,
  UilMobileAndroid,
  UilPalette,
  UilServerNetwork,
  UilWebGridAlt,
} from "@iconscout/react-unicons";

export const homeContent = [
  "MERN Stack Developer",
  "NextJS Developer",
  "Laravel Developer",
  "React Native Developer",
];

const sSize = 18;
export const socials = [
  {
    icon: <UilGithub size={sSize} />,
    link: "https://github.com/azn-arabin",
    name: "GitHub",
  },
  {
    icon: <UilLinkedin size={sSize} />,
    link: "https://www.linkedin.com/in/azn-arabin/",
    name: "LinkedIn",
  },
  {
    icon: <UilFacebook size={sSize} />,
    link: "https://www.facebook.com/azn.arabin/",
    name: "Facebook",
  },
  {
    icon: <UilInstagram size={sSize} />,
    link: "https://www.instagram.com/azn_arabin/?hl=en",
    name: "Instagram",
  },
];

export const achievements = [
  {
    name: "Years of Experience",
    amount: 3,
  },
  {
    name: "Project Completed",
    amount: 20,
  },
];

export const experiences = [
  {
    company: "Utronics Ltd.",
    duration: "Nov 2021 – Feb 2022",
    position: "Internship",
    description:
      "I actively contributed to various projects, " +
      "including an ecommerce platform and a " +
      "cricket-based project. I gained valuable" +
      " experience and hands-on knowledge in" +
      " developing and implementing key functionalities.",
  },
  {
    company: "SoftNursery Ltd.",
    duration: "Nov 2023 – Present",
    position: "Junior Software Engineer",
    description:
      "Employed as a Junior Software Engineer, " +
      "specializing in Next.js within an e-commerce " +
      "project. Extensive experience with Next.js, " +
      "including NextIntl and Three.js libraries. " +
      "Primarily focused on frontend development" +
      " while also contributing to backend tasks.",
  },
];

export const educations = [
  {
    degree: "B.Sc. in Electrical & Electronic Engineering",
    institution: "University of Rajshahi",
    description:
      "As my academic background lies in engineering, I have dedicated my time and efforts to pursuing my interest in the world of software and mobile development through self-study and practical projects.",
    duration: "Jan, 2018 - Sep, 2023",
  },
  {
    degree: "M.Sc. in Computer Science and Engineering",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    description:
      "Currently pursuing my Master's degree in Computer Science and Engineering, with a focus on deepening my knowledge in software engineering and gaining more insights into various aspects of computer science.",
    duration: "Sept, 2023 - Present",
  },
];

export const skills = [
  {
    name: "MERN",
    percentage: 85,
  },
  {
    name: "NextJS",
    percentage: 85,
  },
  {
    name: "React Native",
    percentage: 80,
  },
  {
    name: "PHP",
    percentage: 78,
  },
  {
    name: "Laravel",
    percentage: 75,
  },
  {
    name: "Laravel",
    percentage: 85,
  },
  {
    name: "ThreeJS",
    percentage: 60,
  },
  {
    name: "HTML",
    percentage: 95,
  },
  {
    name: "CSS",
    percentage: 92,
  },
  {
    name: "JavaScript",
    percentage: 88,
  },
  {
    name: "Adobe XD",
    percentage: 90,
  },
];

const srSize = 35;
export const services = [
  {
    name: "MERN Stack",
    icon: <UilDatabaseAlt size={srSize} />,
    description:
      "Full-stack development using MongoDB, Express, React, and Node. Utilizing Redux, Bootstrap, Material-UI, Socket.io etc.",
  },
  {
    name: "React Native",
    icon: <UilMobileAndroid size={srSize} />,
    description:
      "Cross-platform mobile app development with React Native, creating feature-rich and visually appealing mobile applications.",
  },
  {
    name: "NextJS",
    icon: <UilWebGridAlt size={srSize} />,
    description:
      "SEO optimized web development with Next.js, providing fast, dynamic, and server-side rendered web applications.",
  },
  {
    name: "Laravel",
    icon: <UilDesktopAlt size={srSize} />,
    description:
      "Laravel development with MySQL, RESTful API integration, and following the MVC architectural pattern for scalable applications.",
  },
  {
    name: "Database",
    icon: <UilServerNetwork size={srSize} />,
    description:
      "Efficient database management, ensuring data integrity, scalability, and high-performance for seamless application functionality.",
  },
  {
    name: "UI/UX Design",
    icon: <UilPalette size={srSize} />,
    description:
      "Creative and user-centered design solutions, focusing on intuitive interfaces and delightful user experiences.",
  },
];

export const projects = [
  {
    name: "Chatting App",
    type: "Web Application",
    description:
      "The MERN stack app allows users to register, authenticate," +
      " and communicate in real-time with messaging and photo.",
    thumb: "/images/projects/chat/thumb.png",
    screenshots: [
      "/images/projects/chat/thumb.png",
      "/images/projects/chat/chat-1.png",
      "/images/projects/chat/chat-2.png",
      "/images/projects/chat/chat-3.png",
    ],
    tech: ["MERN", "Socket.io", "Redux", "MUI"],
    completedAt: "June, 2023",
    source: "https://github.com/azn-arabin/Chat_Application",
    visit: "https://chatvista.vercel.app/",
  },
  {
    name: "Demographic Visualization",
    type: "Web Application",
    description:
      "This is an undergraduate level project developed" +
      " as part of the academic curriculum in the Department" +
      " of Electrical and Electronic Engineering at " +
      "University of Rajshahi.The project aims to provide a user-friendly" +
      " platform for projecting the total population of Bangladesh " +
      "based on user inputs.",
    thumb: "/images/projects/demography/thumb.png",
    screenshots: [
      "/images/projects/demography/thumb.png",
      "/images/projects/demography/demography-1.png",
      "/images/projects/demography/demography-2.png",
      "/images/projects/demography/demography-3.png",
      "/images/projects/demography/demography-4.png",
      "/images/projects/demography/demography-5.png",
    ],
    tech: [
      "NextJS",
      "MongoDB",
      "React-Leaflet",
      "React-Recharts",
      "SendGrid",
      "Framer-motion",
      "Firebase",
    ],
    completedAt: "August, 2023",
    source: "https://github.com/azn-arabin/demography",
    visit: "https://demographybd.vercel.app",
  },
  {
    name: "Portfolio",
    type: "Personal Website",
    description:
      "Discover my personal portfolio website, " +
      "where you can explore a compilation of my" +
      " personal projects, delve into my skillset, " +
      "and find comprehensive information about me.",
    thumb: "/images/projects/portfolio/thumb.png",
    screenshots: [
      "/images/projects/portfolio/thumb.png",
      "/images/projects/portfolio/portfolio-1.png",
      "/images/projects/portfolio/portfolio-2.png",
      "/images/projects/portfolio/portfolio-3.png",
    ],
    tech: ["NextJS", "Tailwind CSS", "SendGrid", "Framer-motion", "Firebase"],
    completedAt: "July, 2023",
    source: "https://github.com/azn-arabin/my-portfolio",
    visit: "https://arabin.vercel.app",
  },
  {
    name: "Result App",
    type: "Android App",
    description:
      "Experience the convenience of accessing " +
      "all the results of my batch in the EEE " +
      "Department at University of Rajshahi through " +
      "this Android app.",
    thumb: "/images/projects/result/thumb.png",
    screenshots: [
      "/images/projects/result/thumb.png",
      "/images/projects/result/result-1.png",
      "/images/projects/result/result-2.png",
    ],
    tech: ["React Native", "Firebase"],
    completedAt: "June, 2022",
    source: "https://github.com/azn-arabin/Result_EEE",
    visit:
      "https://drive.google.com/drive/u/0/folders/1DO7sw2UpxEPFb5r26uhprUtcqnJILRGn",
  },
  {
    name: "Snake Game",
    type: "Android App",
    description:
      "Enjoy a classic Snake Game with three levels of difficulty," +
      " offering a simple and engaging gaming experience.",
    thumb: "/images/projects/snake/thumb.png",
    screenshots: [
      "/images/projects/snake/thumb.png",
      "/images/projects/snake/snake-1.png",
    ],
    tech: ["Java", "Firebase"],
    completedAt: "January, 2021",
    source: "https://github.com/azn-arabin/Snake_Game_Android",
    visit:
      "https://docs.google.com/uc?export=download&id=1DDufJ2A8cUfyBKaauZbH0OrZa_gb9TIV",
  },
  {
    name: "Tic Tac Toe",
    type: "Android App",
    description:
      "Experience the simplicity of a classic Tic-Tac-Toe Game, " +
      "where you can engage in friendly matches against the computer " +
      "or challenge another player for ultimate victory.",
    thumb: "/images/projects/tic-tac/thumb.png",
    screenshots: [
      "/images/projects/tic-tac/thumb.png",
      "/images/projects/tic-tac/tic-tac-1.png",
    ],
    tech: ["Java", "Firebase"],
    completedAt: "February, 2021",
    source: "https://github.com/azn-arabin/Tic-Tac-Toe",
    visit:
      "https://docs.google.com/uc?export=download&id=1CSqHteY8uotDMXDttxdnTQQcXM3gdZ3D",
  },
];
