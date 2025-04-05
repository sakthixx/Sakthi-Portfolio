import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

import styles from "@/styles/ProjectsPage.module.css";

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Services</h1>
      <p className={styles.pageSubtitle}>
        The goal is not to build a website. The goal is to build your business.
      </p>
      <p className={styles.pageSubtitle}>
        I&apos;m focused on frontend development with React &amp; Next, but
        you&apos;ll also find me working with Node.js, PostgreSQL while building
        the backend for my personal projects.
      </p>
      <p className={styles.pageSubtitle}>
        Apart from development, I run a small resume writing &amp; services
        hustle by helping individuals to enrich their resume quality as per
        current ATS Standards.
      </p>

      <p className={styles.pageSubtitle}>
        I offer personalized resume review and writing services to help you: <br/> 
        <br/>
        ✅ Showcase your technical skills effectively. <br/> 
        ✅ Align your resume with specific job roles. <br/> 
        ✅ Increase your chances of getting noticed by recruiters. <br/>
        <br/> 
        📬 I am in a single click away, fill this form <a href='https://resumepro-ind.vercel.app/'>resumepro-ind.vercel.app</a> and I will get in touch within 24 Hours.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Services" },
  };
}

export default ProjectsPage;
