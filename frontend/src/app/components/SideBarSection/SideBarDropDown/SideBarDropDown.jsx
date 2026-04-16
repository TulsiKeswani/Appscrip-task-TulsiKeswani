"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Square } from "lucide-react";
import styles from "./SideBarDropDown.module.css";
export default function SideBarDropDown({ title, options }) {
  const [drop, setDrop] = useState(false);
  return (
    <div className={styles.dropSection}>
      <div className={styles.title}>
        <p>{title}</p>
        {drop ? (
          <ChevronUp
            onClick={() => setDrop(false)}
            style={{ height: "16px", width: "16px", opacity: "0.5",cursor:"pointer" }}
          />
        ) : (
          <ChevronDown
            onClick={() => setDrop(true)}
            style={{ height: "16px", width: "16px", opacity: "0.5",cursor:"pointer"}}
          />
        )}
      </div>
      <p>All</p>
      <p className={styles.unselect}>Unselect all</p>

      {
        drop?
        <div className={styles.options}>
          {options?.map((category) => {
            return (
              <div className={styles.option}>
                <Square></Square>
                <p>{category}</p>
              </div>
            );
          })}
        </div> :
        <></>
      }
    </div>
  );
}
