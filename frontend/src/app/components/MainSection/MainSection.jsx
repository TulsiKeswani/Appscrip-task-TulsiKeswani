"use client";
import styles from "./MainSection.module.css";
import SideBar from "../SideBarSection/SideBar/SideBar.jsx";
import ProductSection from "../ProductSection/ProductGrid/ProductGrid.jsx";
import FilterBar from './../FilterBar/FilterBar';
import { useState } from "react";
export default function MainSection({data}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
