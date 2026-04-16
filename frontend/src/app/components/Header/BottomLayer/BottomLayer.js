import React from "react";
import styles from "./BottomLayer.module.css";
import {TextAlignJustify } from "lucide-react";
export default function BottomLayer() {
  return (
    <div className={styles.navbar}>
      <div className={styles.firstLayer}>
        <div className={styles.logo}>
          <TextAlignJustify style={{marginRight:"8px",height:"20px", width:"20px",display:"none"}}></TextAlignJustify>
          <img src="\Logo.png" alt="Website Logo" />
        </div>
        <div className={styles.centerText}><p>LOGO</p></div>
        <div className={styles.icons}>
          <img
            src="\search-normal.png"
            alt="Search Icon"
            className={styles.icon}
          />
          <img src="\heart.png" alt="Heart Icon"  className={styles.icon}/>
          <img
            src="\shopping-bag.png"
            alt="Shopping Icon"
            className={styles.icon}
          />
          <img src="\profile.png" alt="Profile" className={`${styles.icon} ${styles.profile}`}/>
          <img
            src="\Language.png"
            alt="Language Icon"
            className={`${styles.icon} ${styles.language}`}
          />
        </div>
      </div>
      <div className={styles.secondLayer}>
        <span>SHOP</span>
        <span>SKILLS</span>
        <span>STORIES</span>
        <span>ABOUT</span>
        <span>CONTACT US</span>
      </div>
    </div>
  );
}
