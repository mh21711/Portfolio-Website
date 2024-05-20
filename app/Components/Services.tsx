import styles from "../page.module.css";
import { FaCode, FaApple, FaCropAlt } from "react-icons/fa";

const Services = () => {
  return (
    <>
        <section className={styles.servcies}>
            <div className={styles.container}>
                <h1 className={styles.subtitle}>My <span>Services</span></h1>
                <div className={styles.serviceslist}>
                    <div>
                        <FaCode style={{color: "#00eeff"}} />
                        <h2>Clean Code</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                           Recusandae quaerat, aperiam sed aut repudiandae iusto.
                           Recusandae veniam laborum sapiente commodi dicta vitae exercitationem,
                           labore quis incidunt nostrum. Dolores, fugit adipisci!
                        </p>
                        <a href="https://github.com/mh21711" target="_blank" className={styles.plearn}>Learn More</a>
                    </div>
                    <div>
                        <FaApple style={{color: "#00eeff"}} />
                        <h2>Responsive Web</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                           Recusandae quaerat, aperiam sed aut repudiandae iusto.
                           Recusandae veniam laborum sapiente commodi dicta vitae exercitationem,
                           labore quis incidunt nostrum. Dolores, fugit adipisci!
                        </p>
                        <a href="https://github.com/mh21711" target="_blank" className={styles.plearn}>Learn More</a>
                    </div>
                    <div>
                        <FaCropAlt style={{color: "#00eeff"}} />
                        <h2>React.js</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                           Recusandae quaerat, aperiam sed aut repudiandae iusto.
                           Recusandae veniam laborum sapiente commodi dicta vitae exercitationem,
                           labore quis incidunt nostrum. Dolores, fugit adipisci!
                        </p>
                        <a href="https://github.com/mh21711" target="_blank" className={styles.plearn}>Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services;