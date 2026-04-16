import styles from "./page.module.css";
import Hero from './components/Hero/Hero';
import MainSection from "./components/MainSection/MainSection.jsx"
import Footer from "./components/Footer/Footer.js"
export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return (
      <div className={styles.container}>
            <Hero></Hero>
            <MainSection data={data}></MainSection>
            <Footer></Footer>
      </div>
  );
}
