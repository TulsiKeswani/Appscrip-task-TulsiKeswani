import React from "react";
import styles from "./BottomLayer.module.css";
import { TextAlignJustify } from "lucide-react";
export default function BottomLayer() {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.firstLayer}>
          <div className={styles.logo}>
            <TextAlignJustify className={styles.openbar}></TextAlignJustify>
            <img src="\Logo.png" alt="Website Logo" />
          </div>
          <div className={styles.centerText}>
            <p>LOGO</p>
          </div>
          <div className={styles.icons}>
            <img
              src="\search-normal.png"
              alt="Search Icon"
              className={styles.icon}
            />
            <img src="\heart.png" alt="Heart Icon" className={styles.icon} />
            <img
              src="\shopping-bag.png"
              alt="Shopping Icon"
              className={styles.icon}
            />
            <img
              src="\profile.png"
              alt="Profile"
              className={`${styles.icon} ${styles.profile}`}
            />
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

      <div className={styles.linkSection}>
          <span style={{opacity:"0.4"}}>HOME | </span>
          <span>SHOP</span>
      </div>
    </div>

  );
}
