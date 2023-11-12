import {
  mobile,
  backend,
  creator,
  web,
  ski,
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
  Aapi,
  mail,
  github,
  linkedin,
  natural,
  api,
  wecode,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Translator",
    icon: web,
  },
  {
    title: "Bussiness Adminstration",
    icon: mobile,
  },
  {
    title: "Junior Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Business Administration",
    company_name: "Bachelor",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2010 - Jun 2014",
    points: [
      "Throughout my academic journey, I dedicated myself to studying Business Administration.",
      " This experience equipped me with a comprehensive understanding of key business principles, including strategic management, finance, marketing, and organizational behavior.",
      " It provided a solid foundation for approaching real-world challenges with a well-rounded perspective and a strategic mindset, fostering my ability to analyze complex business scenarios and make informed decisions.",
    ],
  },
  {
    title: "Translator",
    company_name: "Private",
    icon: web,
    iconBg: "#383E56",
    date: "Sep 2014 - April 2016",
    points: [
      "During a specific period, I gained valuable experience working as a private English tutor.",
      "This role allowed me to tailor lessons to individual students, focusing on their unique needs and learning styles.",
      "I honed my skills in creating personalized educational plans and fostering a supportive learning environment to ensure students progress and confidence in their English language abilities.",
    ],
  },

  {
    title: "Full-Stack Web-Developer",
    company_name: "Iron Hack",
    icon: web,
    iconBg: "#383E56",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Immersing myself in a Full Stack Junior Developer boot camp, I acquired hands-on experience in both front-end and back-end development.",
      " Through this intensive program, I delved into various technologies, honed my coding skills, and developed applications, gaining a solid grasp of web development principles.",
      " This experience not only broadened my technical expertise but also cultivated my problem-solving abilities and collaborative skills in a dynamic, team-based environment.",
    ],
  },
  {
    title: "Creator",
    company_name: "Self Enjoyment",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "I find immense joy in being a creator. The process of bringing ideas to life, whether through coding, design, or problem-solving, is incredibly fulfilling to me. Creating something from scratch, whether it's a piece of software, a business solution, or a unique project, fuels my passion and brings a sense of accomplishment that drives my dedication and enthusiasm for what I do.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "7 Repositories That Will Make You 90% Smarter and  that could transform your project and in the process... ",
    name: "Nathan Tarbert",
    link: "https://dev.to/nathan_tarbert/7-repositories-that-will-make-you-90-smarter-2jb3?ref=dailydev",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--ZxkJa2P8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jm1jt0lla95yuf3yi12c.gif",
  },
  {
    testimonial:
      "I quit Google Chrome after 15 years: Here’s where I ended up and why ... ",
    name: "Rael Hornby",
    link: "https://www.laptopmag.com/software/browsers-search-engines/i-quit-google-chrome-after-15-years-heres-where-i-ended-up-and-why?ref=dailydev",
    image:
      "https://cdn.mos.cms.futurecdn.net/HFfv7EGivr4Nexs9ktLywS-1200-80.jpg.webp",
  },
  {
    testimonial:
      "Is Next.js 13 + RSC a Good Choice? I Built an App Without Client-Side Javascript to Find Out",
    name: "ZenStack",
    link: "https://dev.to/zenstack/is-nextjs-13-rsc-a-good-choice-i-built-an-app-without-client-side-javascript-to-find-out-hik?ref=dailydev",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--RCXxFqgL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mbq46er6cey83694bl20.png",
  },
];

const projects = [
  {
    name: "Natural life",
    linkLive: "https://github.com/Mahtabvariyani/NaturalLife",

    description:
      "NaturalLife Store is a web application that allows a family (Farm FamilyHack) in a village to sell their products online. Each season brings different offers and products for users to browse and order. The website also provides weather information using an API and allows both registered and non-registered users to contact the family.",
    tags: [
      {
        name: "Handlebars",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Modejs",
        color: "pink-text-gradient",
      },
    ],
    image: natural,
    source_code_link: "https://github.com/Mahtabvariyani/NaturalLife",
  },
  {
    name: "API",
    linkLive:"https://labtop-blog.vercel.app/",
    description:
      "An interconnected web application with diverse pages, each linked to various APIs for comprehensive testing and functionality. Explore different API integrations across each page, showcasing the dynamic interaction with varied external services.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: api,
    source_code_link: "https://github.com/Mahtabvariyani/APi",
  },
  {
    name: "We Code",
    linkLive:"https://we-dev.vercel.app/sign-up?redirect_url=https%3A%2F%2Fwe-dev.vercel.app%2F",
    description:
      "ConnectDev is a collaborative platform designed for developers to connect, communicate, collaborate, and code together. It offers a space for developers to ask questions, share knowledge, and work on coding projects in real-time. With built-in authentication powered by Clerk, users can create or join communities of up to 5 members to work together seamlessly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: wecode,
    source_code_link: "https://github.com/Mahtabvariyani/WeCode",

  },
  {
    name: "Rent APP",
    linkLive:"https://carrenting-app.vercel.app/",
    description:
      "This is a small Renting app that is connected to the Api so the user can search and find a car to rent ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Aapi,
    source_code_link: "https://github.com/Mahtabvariyani/WeCode",
  }, {
    name: "Skiwear Shop",
    linkLive:"https://skiwearshop.vercel.app/",
    description:
      "A Small Commerce App without Authentication for justy trying and testing the App having a Stripe testing payment and adding the Products and APi  with Sanity",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ski,
    source_code_link: "https://github.com/Mahtabvariyani/skiwearshop",
  },
];

const socialLinks = [
  {
    icon: github,
    link: "https://github.com/Mahtabvariyani",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/mahvariyani/",
  },
  {
    icon: mail,
    link: "mahtabvariyani@gmail.com",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialLinks,
};
