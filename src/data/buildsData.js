import homeverse from '../assets/images/HomeVerse.png'
import habitual from '../assets/images/Habitual.png'
import vigista from '../assets/images/Vigista.png'

const buildsData = [
  {
    title: "HomeVerse",
    slug: "homeverse",
    description: "Modern real estate platform",
    category: "Web Apps",
    tech: ["React", "Bootstrap", "Netlify"],
    status: "Live",
    image: homeverse,

    // 🔥 NEW FIELDS (for BuildDetail)

    live: "https://homeverse-apk.netlify.app/",
    github: "",

    overview:
      "HomeVerse is a modern real estate platform designed to simplify property discovery with a clean UI and seamless browsing experience. It focuses on performance, responsiveness, and intuitive navigation.",

    features: [
      "Advanced property browsing and filtering",
      "Fully responsive across devices",
      "Clean and modular component structure",
      "Fast navigation and optimized UI interactions"
    ],

    images: [
      homeverse, // you can add more screenshots later
    ],

    techDetails:
      "Built using React for a scalable component-based architecture and Bootstrap for responsive layout design. The application is deployed on Netlify ensuring fast and reliable hosting.",

    learnings:
      "Improved understanding of component structuring, responsive UI design, and performance optimization. Learned how to manage UI consistency across multiple sections."
  },

  {
    title: "Habitual",
    slug: "habitual",
    description: "Habit tracker & analyzer platform",
    category: "Mobile App",
    tech: ["React", "Charts", "API"],
    status: "In Progress",
    image: habitual,

    live: "",
    github: "",

    overview:
      "Habitual is a habit tracking platform focused on helping users build consistency through analytics and insights. It aims to combine simplicity with powerful tracking features.",

    features: [
      "Habit tracking and progress monitoring",
      "Analytics dashboard with charts",
      "User-friendly mobile-first interface",
      "Daily consistency tracking system"
    ],

    images: [
      habitual,
    ],

    techDetails:
      "Developed using React with integration of chart libraries for analytics visualization. APIs are used to manage user data and habit tracking logic.",

    learnings:
      "Gained experience in handling dynamic data visualization, managing user interaction flows, and designing for mobile-first experiences."
  },

  {
    title: "Vigista",
    slug: "vigista",
    description: "Image showcasing platform",
    category: "Experimental",
    tech: ["MERN", "Cloudfare"],
    status: "Concept Build",
    image: vigista,

    live: "",
    github: "",

    overview:
      "Vigista is an experimental platform designed to showcase images in a visually engaging and scalable manner. It focuses on performance and media optimization.",

    features: [
      "Image upload and display system",
      "Optimized media delivery",
      "Scalable backend architecture",
      "Minimal and clean UI experience"
    ],

    images: [
      vigista,
    ],

    techDetails:
      "Built using the MERN stack with Cloudflare integration for optimized content delivery and improved performance.",

    learnings:
      "Explored backend integration, media optimization techniques, and scalable architecture planning."
  },
];

export default buildsData;