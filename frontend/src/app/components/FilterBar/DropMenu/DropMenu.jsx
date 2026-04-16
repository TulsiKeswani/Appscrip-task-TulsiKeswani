"use client"
import { useState } from "react";
import styles from "./DropMenu.module.css"
import { Check } from "lucide-react";
export default function DropMenu() {
const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH"
];

const [selected, setSelected] = useState("RECOMMENDED");

  return (
    <div className={styles.dropdown}>
      {options.map((item) => (
        <div
          key={item}
          className={`${styles.option} ${
            selected === item ? styles.active : ""
          }`}
          onClick={() => setSelected(item)}
        >
          {selected === item && <Check style={{height:"26px",width:"26px"}}></Check>}
          {item}
        </div>
      ))}
    </div>
  )
}
