type work = {
    id:number
    title:string
    description:string
    imgUrl:string
    codeLink: string
    projectLink: string
    tags: Array<string> | []
  }

export const data : Array<work> = [
    {
        id: 1,
        title: "Travel Destination Lister",
        imgUrl: "/images/travel.png",
        projectLink: "https://attendance-averager.netlify.app/",
        codeLink: "https://github.com/unnikrishnan-coder/travel-destinations-lister",
        description: "Website where you can enter a destination and get a pdf document of nearby locations to explore",
        tags: ["Python","Django","Full Stack","HTML","CSS","Javascript","Web Scraping"]
    },
    {
        id: 2,
        title: "Internship Certificate Management System",
        imgUrl: "/images/internship.png",
        projectLink: "https://unnikrishnans-portfolio.netlify.app/",
        codeLink: "https://github.com/unnikrishnan-coder/techgentia-internship-certificate-app",
        description: "Internship application management and certificate delivery website",
        tags: ["Full Stack","HTML","CSS","Javascript","React JS","Express","MySQL","Flutter"]
    },
    {
        id: 3,
        title: "Attendence Averager App",
        imgUrl: "/images/attendence.png",
        projectLink: "https://attendance-averager.netlify.app/",
        codeLink: "https://github.com/unnikrishnan-coder/attendance_averager",
        description: "A front end project using html,css and javascript to calculate attendence",
        tags: ["Front End","HTML","CSS","Javascript"]
    },
    {
        id: 4,
        title: "Portfolio Website",
        imgUrl: "/images/about04.png",
        projectLink: "https://unnikrishnans-portfolio.netlify.app/",
        codeLink: "https://github.com/unnikrishnan-coder",
        description: "My portfolio website that you are currently looking at",
        tags: ["Full Stack","React JS","Next JS"]
    },
    {
        id: 5,
        title: "Event Management System",
        imgUrl: "/images/event2.png",
        projectLink: null,
        codeLink: "https://github.com/unnikrishnan-coder/event-management-system",
        description: "A full stack project of event management system",
        tags: ["Full Stack","HTML","CSS","Javascript","React JS","Express","MySQL"]
    }
]