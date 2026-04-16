"use client";
import { useState } from "react";
import styles from "./ProductCard.module.css";
import { Heart, Pointer } from "lucide-react";
export default function ProductCard({ imgSrc, title }) {
     const [liked, setLiked] = useState(false);
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <div className={styles.signin}>
        <p><span style={{textDecoration:"underline"}}>Sign in</span> or Create an account to see pricing</p>
        <Heart
          onClick={() => setLiked(!liked)}
          color={liked ? "red" : "black"}
          fill={liked ? "red" : "none"}
          opacity={0.7}
          cursor={"Pointer"}
        />
      </div>
    </div>
  );
}
