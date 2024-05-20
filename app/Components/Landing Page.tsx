import styles from "../page.module.css";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

const Landing_Page = () => {
  return (
    <section className={styles.home} id="Home">
        <div className={styles.homecontent}>
        <h3>Hello, It&apos;s Me</h3>
        <h1>Mahmoud Elrashedy</h1>
        <h3>And I&apos;m a <span><Typewriter words={["FrontEnd Developer", "React Developer", "Web Developer"]}
        loop={Infinity}
        cursor
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}
        /></span></h3>
        <p>
            I am a FrontEnd Developer, Junior Software Engineer with 2+ years of Experience and Skills in FrontEnd Development.
            I help Companies make their idea into a Real Application with React.js
        </p>
        <div className={styles.homeicons}>
            <a href="https://www.facebook.com/mahmoud.elrashedy.944" target="_blank" className={styles.a1}><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/mahmoudelrashedy/" target="_blank" className={styles.a2}><FaLinkedinIn /></a>
            <a href="https://github.com/mh21711" target="_blank" className={styles.a3}><FaGithub /></a>
            <a href="https://www.instagram.com/mahmoud_12ra/" target="_blank" className={styles.a4}><FaInstagramSquare /></a>
        </div>
        <a href="https://www.linkedin.com/in/mahmoudelrashedy/" target="_blank" className={styles.link}>More About Me</a>
        </div>
        <a href="#About" className={styles.arrow}><MdKeyboardDoubleArrowDown /></a>
        <a href="#" className={styles.up}><FaArrowUp /></a>
    </section>
  )
}

export default Landing_Page;