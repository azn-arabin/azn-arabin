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
    link: "https://github.com/Arabin1",
    name: "GitHub",
  },
  {
    icon: <UilLinkedin size={sSize} />,
    link: "https://www.linkedin.com/in/as-arabin/",
    name: "LinkedIn",
  },
  {
    icon: <UilFacebook size={sSize} />,
    link: "https://www.facebook.com/mbd.asaduzzaman.arabin/",
    name: "Facebook",
  },
  {
    icon: <UilInstagram size={sSize} />,
    link: "https://www.instagram.com/md_arabin_islam/?hl=en",
    name: "Instagram",
  },
];

export const achievements = [
  {
    name: "Years of Experience",
    amount: 2,
  },
  {
    name: "Project Completed",
    amount: 10,
  },
];

export const experiences = [
  {
    company: "Utronics",
    duration: "Nov 2021 – Feb 2022",
    position: "Internship",
    description:
      "I actively contributed to various projects, " +
      "including an ecommerce platform and a " +
      "cricket-based project. I gained valuable" +
      " experience and hands-on knowledge in" +
      " developing and implementing key functionalities.",
  },
];

export const educations = [
  {
    degree: "B.Sc. in Electrical & Electronic Engineering",
    institution: "Rajshahi University",
    description:
      "As my academic background lies in engineering, I have dedicated my time and efforts to pursuing my interest in the world of software and mobile development through self-study and practical projects.",
    duration: "Jan, 2018 - Present",
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
    thumb: "./images/projects/project-1.jpg",
    tech: ["MERN", "Socket.io", "Redux", "MUI"],
    source: "https://github.com/Arabin1/Chat_Application",

    visit: "https://chatvista.vercel.app/chat",
  },
  {
    name: "Portfolio",
    type: "Personal Website",
    description:
      "This is my personal portfolio website." +
      " All of my personal projects, skills, and " +
      "information about me can be found here.",
    thumb: "./images/projects/project-2.jpg",
    tech: ["NextJS", "Bootstrap", "Firebase"],
    source: "https://github.com/Arabin1/my_portfolio",

    visit: "https://arabin.vercel.app",
  },
  {
    name: "Color Rating",
    type: "Web Application",
    description:
      "This is a copy project from the book " +
      '"Learning React" by Alex Banks and Eve Porcello. ' +
      "While reading the book, I did this project.",
    thumb: "./images/projects/project-3.jpg",
    tech: ["ReactJS", "Bootstrap", "Redux"],
    source: "",
    visit: "https://stormy-hamlet-01440.herokuapp.com/",
  },
  {
    name: "Result App",
    type: "Android App",
    description:
      "The app is available for android platform." +
      " All results of my batch of " +
      "EEE Department, Rajshahi " +
      "University are available in this app.",
    thumb: "./images/projects/project-4.jpg",
    tech: ["React Native", "Firebase"],
    source: "https://github.com/Arabin1/Result_EEE",
    visit:
      "https://drive.google.com/drive/u/0/folders/1DO7sw2UpxEPFb5r26uhprUtcqnJILRGn",
  },
  {
    name: "Snake Game",
    type: "Android App",
    description:
      "It's a simple Snake Game. I made it for " +
      "learning purpose. This game allows three levels.",
    thumb: "./images/projects/project-5.jpg",
    tech: ["Java", "Firebase"],
    source: "https://github.com/Arabin1/Snake_Game_Android",
    visit:
      "https://docs.google.com/uc?export=download&id=1DDufJ2A8cUfyBKaauZbH0OrZa_gb9TIV",
  },
  {
    name: "Tic Tac Toe",
    type: "Android App",
    description:
      "This is a simple Tic-Tac-Toe Game." +
      " I made it for learning purpose. You " +
      "can play against the computer or with another player.",
    thumb: "./images/projects/project-6.jpg",
    tech: ["Java", "Firebase"],
    source: "https://github.com/Arabin1/Tic-Tac-Toe",
    visit:
      "https://docs.google.com/uc?export=download&id=1CSqHteY8uotDMXDttxdnTQQcXM3gdZ3D",
  },
];
