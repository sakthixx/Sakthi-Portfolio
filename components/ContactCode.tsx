import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'sakthiiii460@gmail.com',
    href: 'mailto:sakthiiii460@gmail.com',
  },
  {
    social: 'github',
    link: 'sakthixx',
    href: 'https://github.com/sakthixx',
  },
  {
    social: 'Phone/WhatsApp',
    link: '+91 8438290133',
  },
  {
    social: 'linkedin',
    link: 'Sakthishwaran Anand',
    href: 'https://www.linkedin.com/in/sakthi1604/',
  },
  // {
  //   social: 'telegram',
  //   link: 'Sakthishwaran',
  //   href: 'https://t.me/iamnitinr',
  // },
  {
    social: 'DEV Social',
    link: 'Sakthishwaran',
    href: 'https://dev.to/sakthishwarananand',
  },
  {
    social: 'Resume Writing Services',
    link: 'ResumePro',
    href: 'https://resumepro-ind.vercel.app/'
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
