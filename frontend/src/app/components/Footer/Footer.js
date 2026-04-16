import styles from './Footer.module.css'
import Contact from './Contact/Contact';
import Links from './Links/Links';

export default function Footer() {
  return (
    <div className={styles.Footer}>
        <Contact></Contact>
        <hr style={{opacity:"0.7"}}/>
        <Links></Links>
        <p style={{textAlign:"center",marginTop:"4rem",opacity:'0.6'}}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  )
}
