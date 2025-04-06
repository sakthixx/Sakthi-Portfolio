export interface Project {
    title: string;
    description: string;
    logo: string;
    link: string;
    slug: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Front-end UI",
      description:
        "I use recent web technologies to develop responsive & dynamic layouts which converts visitors to customers. Reach me out by a single click! ",
      logo: "/logos/frontend.png",
      link: "https://resumepro-ind.vercel.app/",
      slug: "frontend",
    },
    {
      title: "ResumePro",
      description:
        "Crafting modern quality ATS friendly resumes to individuals by providing customized resume creation and review services tailored to showcase your strengths and expertise, ensuring you stand out to employers.",
      logo: "/logos/vsc.svg",
      link: "https://resumepro-ind.vercel.app/",
      slug: "ResumePro",
    },
  ];
  