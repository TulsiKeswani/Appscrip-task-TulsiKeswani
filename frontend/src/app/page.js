import styles from "./page.module.css";
import Hero from './components/Hero/Hero';
import MainSection from "./components/MainSection/MainSection.jsx"
import Footer from "./components/Footer/Footer.js"

export default async function Home() {
  let data = [];
  
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      // Optional: Add a cache setting for 2026 standards
      next: { revalidate: 3600 } 
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    data = await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    // data remains an empty array so the page still builds
  }

  return (
      <div className={styles.container}>
            <Hero />
            <MainSection data={data} />
            <Footer />
      </div>
  );
}