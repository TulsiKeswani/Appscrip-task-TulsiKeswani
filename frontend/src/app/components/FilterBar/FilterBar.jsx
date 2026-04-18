"use client";
import styles from "./FilterBar.module.css";
import { ChevronLeft, ChevronDown, ChevronRight } from "lucide-react";
import DropMenu from "./DropMenu/DropMenu";
import { useState } from "react";
export default function FilterBar({ isSidebarOpen, handleClick }) {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div className={styles.filterContainer}>
      <div className={styles.itemFilter}>
        <p>3425 ITEMS</p>
        {isSidebarOpen ? (
          <button onClick={handleClick}>
            <ChevronLeft
              style={{ height: "16px", width: "16px" }}
            ></ChevronLeft>{" "}
            HIDE FILTER
          </button>
        ) : (
          <button onClick={handleClick}>
            <ChevronRight
              style={{ height: "16px", width: "16px" }}
            ></ChevronRight>{" "}
            SHOW FILTER
          </button>
        )}
      </div>
        <hr style={{height:"1rem"}}/>
      <div
        className={styles.recommended}
      >
        <div onClick={() => setOpenDropDown(!openDropDown)}>
          RECOMMENDED{" "}
          <ChevronDown
            style={{ height: "16px", width: "16px", opacity: "0.5" }}
          ></ChevronDown>
        </div>

        {openDropDown ? <DropMenu></DropMenu> : <></>}
      </div>
    </div>
  );
}
