import styles from "../page.module.css";
import Image from "next/image";
import Main from "../Images/Main.png";

const About = () => {
  return (
    <>
        <section className={styles.about} id="About">
            <div className={styles.aboutimage}>
                <Image src={Main} alt="Personal Photo" width={500} height={500} />
            </div>
            <div className={styles.aboutcontent}>
                <h2>About <span>Me</span></h2>
                <h4>FrontEnd Developer</h4>
                <p>
                    FrontEnd Developer, Junior Software Engineer with 2+ years of Experience and Skills in FrontEnd Development.
                    I help Companies make their idea into a Real Application with Html and CSS and Javascript and I am expertise in that.
                    I get excited about any Opprtunities Where I am a front End Developer.
                    I love Connecting with People, you can reach me at
                    elrashedymahmoud217@gmail.com
                </p>
                <a href="https://www.linkedin.com/in/mahmoudelrashedy/" target="_blank" className={styles.link}>More About Me</a>
            </div>
        </section>
    </>
  )
}

export default About;