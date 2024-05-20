"use client";
import styles from "./page.module.css";
import Link from "next/link";
import About from "./Components/About";
import Services from "./Components/Services";
import Landing_Page from "./Components/Landing Page";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function Home() {
  return (
    <>
      {/* Start Header */}
      <header className={styles.header}>
        <a href="https://www.linkedin.com/in/mahmoudelrashedy/" target="_blank">Elrashedy</a>
        <nav className={styles.nav}>
          <Link href="#Home" className={styles.a5}>Home</Link>
          <Link href="#About" className={styles.a6}>About</Link>
          <Link href="#Skills" className={styles.a7}>Skills</Link>
          <Link href="#Portfolio" className={styles.a8}>Portfolio</Link>
          <Link href="#Contact" className={styles.a9}>Contact</Link>
        </nav>
      </header>
      {/* End Header */}
      {/* Start Landing Page */}
      <Landing_Page />
      {/* End Landing Page */}
      {/* Start About Section */}
      <About />
      {/* End About Section */}
      {/* Start Services Section */}
      <Services />
      {/* End Services Section */}
      {/* Start Skills Section */}
      <Skills />
      {/* End Skills Section */}
      {/* Start Portfolio Sectoin */}
      <Portfolio />
      {/* End Portfolio Sectoin */}
      {/* Start Contact Sectoin */}
      <Contact />
      {/* End Contact Sectoin */}
    </>
  );
}

export default Home;
