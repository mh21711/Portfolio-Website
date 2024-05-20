import styles from "../page.module.css";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  return (
    <div id="Skills">
      <h1 className={styles.subtitle}>My <span>Skills</span></h1>
      <section className={styles.section}>
          <div className={styles.container1}>
            <h1 className={styles.heading1}>Techincal Skills</h1>
            <div className={styles.techincalbars}>
              <div className={styles.bar}>
                <FaHtml5 style={{color: "#c95d2e"}} />
                <div className={styles.info}>
                  <span>HTML</span>
                </div>
                <div className={`${styles.progressline} ${styles.html}`}>
                  <span></span>
                </div>
              </div>
              <div className={styles.bar}>
                <FaCss3Alt style={{color: "#147bbc"}} />
                <div className={styles.info}>
                  <span>CSS</span>
                </div>
                <div className={`${styles.progressline} ${styles.css}`}>
                  <span></span>
                </div>
              </div>
              <div className={styles.bar}>
                <IoLogoJavascript style={{color: "#b0bc1e"}} />
                <div className={styles.info}>
                  <span>JavaScript</span>
                </div>
                <div className={`${styles.progressline} ${styles.javascript}`}>
                  <span></span>
                </div>
              </div>
              <div className={styles.bar}>
                <FaReact style={{color: "#09bcbc"}} />
                <div className={styles.info}>
                  <span>React</span>
                </div>
                <div className={`${styles.progressline} ${styles.react}`}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container1}>
            <h1 className={styles.heading1}>Professional Skills</h1>
            <div className={styles.radialbars}>
              <div className={styles.radialbar}>
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle className={styles.progressbar} cx="100" cy="100" r="80"></circle>
                  <circle className={`${styles.path} ${styles.path1}`} cx="100" cy="100" r="80"></circle>
                </svg>
                <div className={styles.percentage}>90%</div>
                <div className={styles.text}>Creativity</div>
              </div>
              <div className={styles.radialbar}>
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle className={styles.progressbar} cx="100" cy="100" r="80"></circle>
                  <circle className={`${styles.path} ${styles.path2}`} cx="100" cy="100" r="80"></circle>
                </svg>
                <div className={styles.percentage}>80%</div>
                <div className={styles.text}>Communication</div>
              </div>
              <div className={styles.radialbar}>
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle className={styles.progressbar} cx="100" cy="100" r="80"></circle>
                  <circle className={`${styles.path} ${styles.path3}`} cx="100" cy="100" r="80"></circle>
                </svg>
                <div className={styles.percentage}>75%</div>
                <div className={styles.text}>Problem Solving</div>
              </div>
              <div className={styles.radialbar}>
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle className={styles.progressbar} cx="100" cy="100" r="80"></circle>
                  <circle className={`${styles.path} ${styles.path4}`} cx="100" cy="100" r="80"></circle>
                </svg>
                <div className={styles.percentage}>85%</div>
                <div className={styles.text}>TeamWork</div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Skills