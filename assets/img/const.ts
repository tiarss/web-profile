import {
  bmjImage,
  lrnImage,
  wlnImage,
  catetinImage,
  hnzImage,
  ecomImage,
  eventImage,
  eprocImage,
  temanImage,
  periImage,
  inprogressImage,
  gameImage
} from '@/assets/img'

export const PortfolioImage = [
  {
    image: lrnImage,
    alt: "lrn-image",
    shortDesc: "Lomba Robotika Nasional",
    title: 'Lomba Robotika Nasional',
    status: "finished"
  },
  {
    image: wlnImage,
    alt: "wln-image",
    title: "Wulan Backdrop",
    shortDesc: "Wulan Backdrop",
    status: "finished"
  },
  {
    image: catetinImage,
    alt: "catetin-image",
    title: "Catetin - Web Notes App",
    shortDesc: "Catetin - Notes App",
    status: "finished"
  },
  {
    image: hnzImage,
    alt: "hnt-image",
    title: "Hinatazaka46 Web",
    shortDesc: "Hinatazaka46 Web (Dicoding Submission)",
    status: "finished"
  },
  {
    image: gameImage,
    alt: "game-image",
    title: "Game and Movie Web",
    shortDesc: "Game and Movie Web (Sanbercode Submission)",
    status: "finished"
  },
  {
    image: bmjImage,
    alt: "bmj-image",
    title: "Batara Mulya Jaya",
    shortDesc: "Batara Mulya Jaya Web - Mobile",
    status: "finished"
  },
  {
    image: ecomImage,
    alt: "ecom-image",
    title: "Ecommerce Platform",
    shortDesc: "Ecommerce Web",
    status: "finished"
  },
  {
    image: eventImage,
    alt: "event-image",
    title: "Event Planner Platform",
    shortDesc: "Event Planner Web",
    status: "finished"
  },
  {
    image: eprocImage,
    alt: "eproc-image",
    title: "E-Procurement System",
    shortDesc: "E-Procurement Web",
    status: "finished"
  },
  {
    image: temanImage,
    alt: "teman-image",
    title: "Teman Istimewa",
    shortDesc: "Teman Istimewa Web and Mobile App",
    status: "finished"
  },
  {
    image: periImage,
    alt: "peri-image",
    title: "Peri Bugi",
    shortDesc: "Peri Bugi - Mobile App",
    status: "finished"
  },
  {
    image: inprogressImage,
    alt: "tryout-image",
    title: "Tryout Platform",
    shortDesc: "Tryout Web",
    status: "in-progress",
  },
  {
    image: inprogressImage,
    alt: "iot-image",
    title: "IoT Control System",
    shortDesc: "IOT Mobile App and Web",
    status: "in-progress",
  },
  {
    image: inprogressImage,
    alt: "expense-image",
    title: "Expense Tracker",
    shortDesc: "Expense Tracker API (Golang) and Mobile (Swift UI)",
    status: "in-progress",
  }
]

export const PortfolioDetails = [
  {
    id: "lrn",
    title: "Lomba Robotika Nasional",
    shortDesc: "Lomba Robotika Nasional",
    longDesc: "A web platform developed for a national robotics competition, featuring registration systems, competition management, and real-time scoring capabilities.",
    techStack: ["HTML", "CSS", "Javascript"],
    role: "Freelance - Web Developer",
    year: "2020",
    status: "finished"
  },
  {
    id: "wln",
    title: "Wulan Backdrop",
    shortDesc: "Wulan Backdrop",
    longDesc: "An simple web profile to advertise a backdrop rental business, including inventory management",
    techStack: ["HTML", "CSS", "Javascript"],
    role: "Freelance - Web Developer",
    year: "2020",
    status: "finished"
  },
  {
    id: "catetin",
    title: "Catetin - Web Notes App",
    shortDesc: "Catetin - Web Notes App",
    longDesc: "A minimalist note-taking application with local database synchronization and a user-friendly interface.",
    techStack: ["React", "Javascript", "LocalStorage", "CSS", "HTML"],
    role: "Web Developer",
    year: "2021",
    status: "finished"
  },
  {
    id: "hnt",
    title: "Hinatazaka46 Web",
    shortDesc: "Hinatazaka46 Web (Dicoding Submission)",
    longDesc: "A fan website for Hinatazaka46 idol group, featuring member profiles, and media gallery. Built as a submission for Dicoding course.",
    techStack: ["HTML", "CSS", "Javascript"],
    role: "Frontend Developer",
    year: "2021",
    status: "finished"
  },
  {
    id: "bmj",
    title: "Batara Mulya Jaya",
    shortDesc: "Batara Mulya Jaya Web - Mobile",
    longDesc: "A comprehensive employee management and payslip system with web and mobile interfaces for Batara Mulya Jaya company.",
    techStack: ["ReactJS", "Laravel", "React Native", "MySQL", "ChakraUI", "Figma"],
    role: "Frontend Web Developer & UI/UX",
    year: "2021",
    status: "finished"
  },
  {
    id: "ecom",
    title: "Ecommerce Platform",
    shortDesc: "Ecommerce Web",
    longDesc: "A full-featured e-commerce platform with product management, shopping cart, and payment processing.",
    techStack: ["Reactjs", "Typescript", "Go", "PostgreSQL", "MaterialUI, CSS", "HTML", "Figma", "AWS", "RestAPI"],
    role: "Frontend Developer",
    year: "2021",
    status: "finished"
  },
  {
    id: "event",
    title: "Event Planner Platform",
    shortDesc: "Event Planner Web",
    longDesc: "A web application for event planning and management, including scheduling, and guest list features.",
    techStack: ["Reactjs", "Typescript", "Go", "PostgreSQL", "ChakraUI, CSS", "HTML", "Figma", "AWS", "GraphQL"],
    role: "Frontend Developer - Group Lead",
    year: "2022",
    status: "finished"
  },
  {
    id: "eproc",
    title: "E-Procurement System",
    shortDesc: "E-Procurement Web",
    longDesc: "An electronic procurement system for inventory management, procurement process and borrowing process in company.",
    techStack: ["Nextjs", "Typescript", "Go", "PostgreSQL", "ChakraUI, CSS", "HTML", "Figma", "AWS", "RestAPI"],
    role: "Frontend Developer - Group Lead",
    year: "2022",
    status: "finished"
  },
  {
    id: "teman",
    title: "Teman Istimewa",
    shortDesc: "Teman Istimewa Integrated System",
    longDesc: "Notification system (IOT, Web and Mobile App) for “Deaf Friend” working in a special coffee shop.",
    techStack: ["VueJs", "React Native - Expo", "FastApi", "PostgresQL", "Firebase", "RabbitMQ", "TailwindCSS", "HTML", "Figma",],
    role: "Frontend Developer and Mobile Developer",
    year: "2024",
    status: "finished"
  },
  {
    id: "peri",
    title: "Peri Bugi",
    shortDesc: "Peri Bugi - Mobile App",
    longDesc: "A multi-platform mobile app (Android & iOS) for tracking childrens toothbrushing, providing dental education, and knowledge quizzes for mothers",
    techStack: ["React Native - Expo", "Firebase", "NativeWind", "Figma", "PostgreSQL", "Figma", "FastAPI"],
    role: "Mobile Developer",
    year: "2024",
    status: "finished"
  },
  {
    id: "tryout",
    title: "Kampus ASN - Tryout Platform",
    shortDesc: "Tryout Web",
    longDesc: "An online examination and assessment platform for students preparing for various standardized tests.",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "TailwindCSS", "Figma", "RestAPI", "PostgreSQL", "Shadcn"],
    role: "Frontend Developer",
    year: "2025",
    status: "in-progress"
  },
  {
    id: "iot",
    title: "IoT Control System",
    shortDesc: "IOT Mobile App and Web",
    longDesc: "An Internet of Things platform for device monitoring and control, with both web and mobile interfaces.",
    techStack: ["NextJS", "React Native - Expo", "FastAPI", "MQTT", "PostgreSQL", "Figma", "RestAPI"],
    role: "Frontend Developer and Mobile Developer",
    year: "2025",
    status: "in-progress"
  },
  {
    id: "expense",
    title: "Expense Tracker",
    shortDesc: "Expense Tracker API (Golang) and Mobile (Swift UI)",
    longDesc: "A cross-platform expense tracking application built with Golang backend and native iOS frontend using SwiftUI.",
    techStack: ["Golang", "SwiftUI", "PostgreSQL", "Figma", "RestAPI"],
    role: "Full Stack Developer",
    year: "2025",
    status: "in-progress"
  }
];
