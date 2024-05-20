import styles from "../page.module.css";
import { IoSend } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <section className={styles.contact} id="Contact">
                <div className={styles.contacttext}>
                    <h2 className={styles.subtitle}>Contact <span>Me</span></h2>
                    <h4>Let's Work Together</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quas exercitationem corporis aut dignissimos quisquam iure ipsam cupiditate
                        accusantium blanditiis error odit et tenetur, aperiam, quidem omnis dicta illo tempore in?
                    </p>
                    <ul className={styles.contactlist}>
                        <li><IoSend />elrashedymahmoud217@gmail.com</li>
                        <li><FaPhone />01273501583</li>
                    </ul>
                    <div className={styles.homeicons}>
                        <a href="https://www.facebook.com/mahmoud.elrashedy.944" target="_blank" className={styles.a1}><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/in/mahmoudelrashedy/" target="_blank" className={styles.a2}><FaLinkedinIn /></a>
                        <a href="https://github.com/mh21711" target="_blank" className={styles.a3}><FaGithub /></a>
                        <a href="https://www.instagram.com/mahmoud_12ra/" target="_blank" className={styles.a4}><FaInstagramSquare /></a>
                    </div>
                </div>
                <div className={styles.contactform}>
                    <form action="">
                        <input type="text" placeholder="Enter Your Name" required />
                        <input type="email" placeholder="Enter Your Email" required />
                        <input type="text" placeholder="Enter Your Subject" />
                        <textarea cols={40} rows={10} placeholder="Enter Your Message"></textarea>
                        <input type="submit" className={styles.link} id="contactbutton" />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact