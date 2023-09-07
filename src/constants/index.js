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
    wai,
    starbucks,
    tesla,
    shopify,
    carrent,
    NLP,
    sharMe,
    teams_pic,
    jobit,
    tripguide,
    threejs,
    forus,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
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
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Wai Technologies",
      icon: wai,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Developing and maintaining a SaaS based web applications using React.js and other related technologies and integrating with the backend using ABP Commercial(ASP.Net Biolerplate).",
        "Created over 70+ elements, 100+ components, and pages with Bootstrap capabilities by utilizing Typescript and Bootstrap technologies",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Maintained the functionality of a tenant login, tenant switching and user login with role-based module permissions for users",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "AI Intern",
      company_name: "Forus Health Pvt Ltd",
      icon: forus,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - June 2022",
      points: [
        "Designed a Deep learning system for detecting diabetic retinopathy across the disease spectrum using Deep Learning methodologies like Convolutional Neural Network and using Transfer Learning Techniques using pre-trained models like RESNET50 to diagnose the eye disease in an efficient and faster way, which improved the accuracy of detection by 10% and the time to diagnosis by 5%. .",
        "Completed an M.Tech thesis at IIT BHU on the classification of diabetic retinopathy images using Convolutional Neural Networks and obtained a validation accuracy of 98% and a test accuracy of 95%.",
        
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ShareMe Application",
      description:
        "A full stack social media application with all advanced social media features, such as  Google Authentication, create, edit, delete and save posts. ",
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
      image: sharMe,
      source_code_link: "https://github.com/shubham-Sharma1995",
    },
    {
      name: "Review Prediction",
      description:
        "Build a customer review prediction that detects about the reviews a customer gave after having his/her food",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning Algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: NLP,
      source_code_link: "https://github.com/shubham-Sharma1995",
    },
    {
      name: "Chat Application",
      description:
        "A comprehensive chat app with online status, great design and functinality, icons telling who read the message, image support, etc.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "Socket",
          color: "pink-text-gradient",
        },
      ],
      image:teams_pic,
      source_code_link: "https://github.com/shubham-Sharma1995",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };