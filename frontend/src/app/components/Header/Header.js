import React from 'react'
import styles from "./Header.module.css"
import UpperLayer from './UpperLayer/UpperLayer';
import BottomLayer from './BottomLayer/BottomLayer';
export default function Header() {
  return (
    <div className={styles.header}>
        <UpperLayer></UpperLayer>
        <BottomLayer></BottomLayer>
    </div>
  )
}
