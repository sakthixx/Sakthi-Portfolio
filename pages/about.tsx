import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sakthishwaran Anand</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software developer from Chennai, India. I
              primarily work with JavaScript / TypeScript and the React
              ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React &amp; Next,
              but you&apos;ll also find me working with Node.js, PostgreSQL
              while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>

            <p className={styles.paragraph}>
              I&apos;ve been developing frontend UI&apos;s by writing clean code
              with high dynamicity. I also maintain our in-house component
              library, icon library and website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Research</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing an IEEE paper cum project on
              the topic{" "}
              <span className={styles.highlight}>
                E-PILOTS: Harnessing flight analytics and preventing flight
                accidents
              </span>
              ,{" "}
              {/* <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span>*/}
              with powerful Machine Learning algorithms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I love spending quality time
              in Research &amp; Sports , play calm piano music or just laze
              around.
            </p>
            <p className={styles.paragraph}>
              Aside from programming and writing, I love spending quality time
              in{" "}
              <a href="https://resumepro-ind.vercel.app/"><span className={styles.highlight}>
                writing resumes &amp; reviewing resumes
              </span>{" "}</a>
              in an affordable cost to fellow individuals to enhance their
              resume quality.
              
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
