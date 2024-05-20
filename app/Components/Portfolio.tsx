import styles from "../page.module.css";
import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";
import Main1 from "../Images/Main-1.png";
import Main2 from "../Images/Main-2.png";
import Main3 from "../Images/Main-3.png";

const Portfolio = () => {
  return (
    <>
        <section className={styles.portfolio} id="Portfolio">
          <h2 className={styles.subtitle}>Latest <span>Projects</span></h2>
            <div className={styles.projects}>
                <div className={styles.row}>
                    <Image src={Main2} alt="PortFolio Image" width={400} height={300} />
                    <div className={styles.layer}>
                      <h2>Clean Code</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe, quidem fugit. Aperiam voluptate ipsa fugit adipisci veniam,
                        ut totam ratione necessitatibus obcaecati natus odit, ducimus provident aut placeat, vero eos!
                      </p>
                      <a href="https://github.com/mh21711" target="_blank"><RiExternalLinkLine /></a>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image src={Main1} alt="PortFolio Image" width={400} height={300} />
                    <div className={styles.layer}>
                      <h2>Responsive Web</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe, quidem fugit. Aperiam voluptate ipsa fugit adipisci veniam,
                        ut totam ratione necessitatibus obcaecati natus odit, ducimus provident aut placeat, vero eos!
                      </p>
                      <a href="https://github.com/mh21711" target="_blank"><RiExternalLinkLine /></a>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image src={Main3} alt="PortFolio Image" width={400} height={300} />
                    <div className={styles.layer}>
                      <h2>React.js</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe, quidem fugit. Aperiam voluptate ipsa fugit adipisci veniam,
                        ut totam ratione necessitatibus obcaecati natus odit, ducimus provident aut placeat, vero eos!
                      </p>
                      <a href="https://github.com/mh21711" target="_blank"><RiExternalLinkLine /></a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio