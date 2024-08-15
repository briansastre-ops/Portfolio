export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a Banking App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "App For Camping",
    des: "Explore the wonders of nature with this captivating camping experience. Immerse yourself in the beauty of the outdoors and enjoy an unforgettable adventure under the stars, all through a website crafted with Next.js and Tailwind CSS.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "/travelapp-bms.netlify.app/",
  },
  {
    id: 2,
    title: "Horizon - Banking App",
    img: "/p3-3.svg",
    des: "Discover the benefits of our full-stack banking platform, designed to streamline your financial journey. Immerse yourself in an efficient and secure banking experience built with cutting-edge technologies like Next.js, Tailwind CSS, Appwrite, and more, as we continue to enhance our services for you",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/briansastre-ops/bankinapp",
  },
  {
    id: 3,
    title: "Food Page - Pagina Final CAC",
    des: "Indulge in the flavors of our pizza, crafted with passion and fresh ingredients. Dive into an appetizing experience with a website built using HTML, CSS, and JavaScript as we continue to perfect every slice for your delight.",
    img: "/p2-s.svg",
    iconLists: ["/html-5.svg",  "/css-3.svg"],
    link: "/pizzeriacac.netlify.app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Brian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Brian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Brian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Brian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Brian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Brian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Brian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Brian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Brian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Brian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Brian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Brian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Brian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Brian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Brian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
];

export const workExperience = [
  {
      id: 1,
      title: "Lead Front-End Team",
      desc: "Led the development of a functional website for a restaurant, creating a fully responsive page.",
      className: "md:col-span-2 ",
      thumbnail: "/exp1.svg",
  },
  {
      id: 2,
      title: "Inventory System in Python",
      desc: "Created an inventory management system using Python and an SQL database.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
  },
  {
      id: 3,
      title: "Freelance Banking App",
      desc: "Currently working on a banking and finance app.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
  },
  {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
  },
  ];
  

  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg", // Asegúrate de que este archivo esté en /public
      url: "https://github.com/briansastre-ops", // Añade el esquema https://
    },
    
    {
      id: 3,
      img: "/link.svg", // Asegúrate de que este archivo esté en /public
      url: "https://www.linkedin.com/in/brian-sastre-a137452a5", // Añade el esquema https://
    },
  ];
