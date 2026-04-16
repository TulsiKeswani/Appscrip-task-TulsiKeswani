import React from 'react'
import style from "./UpperLayer.module.css"
export default function UpperLayer() {
  return (
     <span className={style.strip}>
        <span className={style.heading}>
            <img src="/element-4.png" alt="layout_icon" />
            <p>Lorem ipsum dolor</p>
        </span>
        <span className={style.heading}>
           <img src="/element-4.png" alt="layout_icon" />
            <p>Lorem ipsum dolor</p>
        </span>
        <span className={style.heading}>
            <img src="/element-4.png" alt="layout_icon" />
            <p>Lorem ipsum dolor</p>
        </span>
     </span>
  )
}
