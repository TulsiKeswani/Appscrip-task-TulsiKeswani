"use client";
import styles from "./MainSection.module.css";
import SideBar from "../SideBarSection/SideBar/SideBar.jsx";
import ProductSection from "../ProductSection/ProductGrid/ProductGrid.jsx";
import FilterBar from './../FilterBar/FilterBar';
import { useState,useEffect } from "react";
export default function MainSection() {
  const [data, setData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Fetch error:", error);
      } 
    };

    fetchData();
  }, []);

  return (
    <div className={styles.mainSection}>
      <div>
        <FilterBar isSidebarOpen={isSidebarOpen} handleClick={() => setIsSidebarOpen(!isSidebarOpen)} ></FilterBar>
      </div>
      <div className={styles.productSection}>
        <SideBar isSidebarOpen={isSidebarOpen}></SideBar>
        <ProductSection data={data} isSidebarOpen={isSidebarOpen}></ProductSection>
      </div>
    </div>
  );
}
