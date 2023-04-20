
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    skillrack,
    skillrack_python,
    skillrack_sql,
    resume,
    hackerrank_python,
    prototype1
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "competitive programmer",
      icon: backend,
    },
    {
      title: "leetcoder",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Education",
      company_name: "school",
      icon: starbucks,
      iconBg: "#383E56",
      date: "- April 2019",
      points: [
        "SBOA MATRIC HIGHER SECONDARY SCHOOL"
      ],
    },
    {
      title: "Education",
      company_name: "college",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2019 - April 2023",
      points: [
        "RMK ENGINEERING COLLEGE - B.E MECHANICAL"
      ],
    },
    {
      title: "Programming",
      company_name: "languages and tools",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "I enjoy writing clean code and creating useful products.",
        "LANGUAGES :","->  Python , Java , C, C++ , Javascript , powershell",
        "TOOLS : ","->  VScode,pycharm"
      ],
    },
    {
      title: "Web Developement",
      company_name: "languages and tools",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "It's fun for me to bring new concepts to life. I consider myself fortunate to be a frontend developer because my work has a direct impact on the user's life.",
        "LANGUAGES :","->  HTML , CSS ,Javascript , REACT , SASS , Bootstrap , Tailwind CSS , Firebase , Express.js , MYSQL",
        "TOOLS :","->  VScode , Figma , Github"
      ],
    },
  ];
  
  const feats = [
    {
      name: "Resume",
      description:"",
      tags: [
        {
          name: "skills",
          color: "blue-text-gradient",
        },
        {
          name: "projects",
          color: "green-text-gradient",
        },
        {
          name: "achievements",
          color: "pink-text-gradient",
        },
      ],
      image: resume,
      source_code_link: "https://drive.google.com/file/d/1Pr93RRFHg8DzNz55IuUhi4N30n2bEEHZ/view?usp=share_link",
    },
    {
      name: "Skillrack",
      description:"Profile",
      tags: [
        {
          name: "competitive programming",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: skillrack,
      source_code_link:"https://www.skillrack.com/faces/resume.xhtml?id=259532&key=44efbe0a168661caadd8c2339165cdcba33f9d2e",
    },
    {
      name: "Python",
      description:"Hackerrank Certificate",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "DSA",
          color: "green-text-gradient",
        },
        {
          name: "OOPS",
          color: "pink-text-gradient",
        },
      ],
      image: hackerrank_python,
      source_code_link:" https://www.hackerrank.com/certificates/ae130fdc7787",
    },
    
    {
      name: "MYSQL hands-on",
      description:"Skillrack Certificate",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "database",
          color: "green-text-gradient",
        },
        {
          name: "MYSQL",
          color: "pink-text-gradient",
        },
      ],
      image: skillrack_sql,
      source_code_link:"https://www.skillrack.com/cert/315789/OSX",
    },
    {
      name: "Certificates",
      description:"Other Certificate",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Time management",
          color: "green-text-gradient",
        },
        {
          name: "OOPS",
          color: "pink-text-gradient",
        },
      ],
      image: skillrack_python,
      source_code_link:"https://drive.google.com/drive/folders/1F1Jp_tuaPD5fhV2wPpnXkaiXj1qZY7jB?usp=share_link",
    },
    {
      name: "FIGMA",
      description:"Prototype",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "UI",
          color: "green-text-gradient",
        },
        {
          name: "prototypw",
          color: "pink-text-gradient",
        },
      ],
      image: prototype1,
      source_code_link:"https://www.figma.com/proto/ndbhUqOLOmMN7z4KaCRpEl/hangman?node-id=0-1",
    },
    
  ];
  


  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, feats, projects };
