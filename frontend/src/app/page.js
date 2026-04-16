import styles from "./page.module.css";
import Hero from './components/Hero/Hero';
import MainSection from "./components/MainSection/MainSection.jsx"
import Footer from "./components/Footer/Footer.js"
export default async function Home() {
  return (
      <div className={styles.container}>
            <Hero></Hero>
            <MainSection ></MainSection>
            <Footer></Footer>
      </div>
  );
}
