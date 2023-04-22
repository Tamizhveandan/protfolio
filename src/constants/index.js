
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
    threejs,
    skillrack,
    skillrack_python,
    skillrack_sql,
    resume,
    hackerrank_python,
    prototype1,
    games,
    event,
    urlShortener,
    notes,
    firebase,
    bootstrap,
    web_dev,
    rmk,
    sboa,
    programming,
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
      name: "bootstrap",
      icon:bootstrap
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
    
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "firebase",
      icon:firebase
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Education",
      company_name: "school",
      icon: sboa,
      iconBg: "#383E56",
      date: "- April 2019",
      points: [
        "SBOA MATRIC HIGHER SECONDARY SCHOOL"
      ],
    },
    {
      title: "Education",
      company_name: "college",
      icon: rmk,
      iconBg: "#E6DEDD",
      date: "Aug 2019 - April 2023",
      points: [
        "RMK ENGINEERING COLLEGE - B.E MECHANICAL"
      ],
    },
    {
      title: "Programming",
      company_name: "languages and tools",
      icon: programming,
      iconBg: "#383E56",
      date: "",
      points: [
        "I find joy in the art of crafting code that is both beautiful and functional.",
        "LANGUAGES :","->  Python , Java , C, C++ , Javascript , powershell",
        "TOOLS : ","->  VScode,pycharm"
      ],
    },
    {
      title: "Web Developement",
      company_name: "languages and tools",
      icon: web_dev,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "I love the creative challenge of turning complex designs into intuitive, user-friendly interfaces.",
        "LANGUAGES :","->  HTML , CSS ,Javascript , REACT , SASS , Bootstrap , Tailwind CSS , Firebase , Express.js , MYSQL",
        "TOOLS :","->  VScode , Figma , Github , Canva"
      ],
    },
  ];
  
  const feats = [
    // {
      
    //   name: "leetcode stats",
    //   description:"",
    //   tags: [
    //     {
    //       name: "python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "OOPS",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "DSA",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: "https://leetcard.jacoblin.cool/tamizh007?theme=unicorn&font=Epilogue&ext=contest",
    //   source_code_link: " https://leetcode.com/tamizh007/",
    // },
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
          name: "prototype",
          color: "pink-text-gradient",
        },
      ],
      image: prototype1,
      source_code_link:"https://www.figma.com/proto/ndbhUqOLOmMN7z4KaCRpEl/hangman?node-id=0-1",
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
    
    
  ];
  


  
  const projects = [
    {
      name: "Games",
      description:
        "A web application that includes three exciting games Tic-tac-toe, Hangman, and Flames. It's an all-in-one platform that offers users a range of fun activities to enjoy.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: games,
      source_code_link: "https://github.com/Tamizhveandan/BT7-games",
      web_link: "https://bangtan-games.web.app/"

    },
    {
      name: "Notes & To-Dos",
      description:
        "A web application organizing your notes and to-do lists! With this app, you can easily create, edit, and delete notes and todos, and keep track of all your tasks in one place.",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "DOM",
          color: "green-text-gradient",
        },
        {
          name: "Firebase database",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_code_link: "https://github.com/Tamizhveandan/notes",
      web_link: "https://bangtan-notes.web.app/"

    },
    {
      name: "URL Shortener",
      description:
        "A URL shortener web app is a tool that takes a long URL and generates a shorter, more compact URL that redirects to the original URL with copy-to-clipboard button feature.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "shrtco API",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: urlShortener,
      source_code_link: "https://github.com/Tamizhveandan/bangtan-urlshortener",
      web_link: "https://bangtan-urlshortener.web.app/"

    },
    {
      name: "Event Page",
      description:
        "The event registration web app for a college symposium is a user-friendly app that allows attendees to sign up for the event, and it's easy to use and navigate.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "SASS",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: event,
      source_code_link: "https://github.com/Tamizhveandan/impulse2k22",
      web_link: "https://bangtan-impulse2k22.web.app/"

    },
  ];
  
  export { services, technologies, experiences, feats, projects };
