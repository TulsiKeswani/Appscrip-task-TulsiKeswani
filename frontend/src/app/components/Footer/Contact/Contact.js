import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.left}>
        <h2>Be the first to know</h2>
        <p>Sign up for updates from mettā muse.</p>
        <div className={styles.form}>
          <input type="text" placeholder="Enter your e-mail..." />
          <button>Subscribe</button>
        </div>
      </div>
     
      <div className={styles.right}>
        <div className={styles.section}>
          <hr />
          <h2>CONTACT US</h2>
          <div className={styles.contactSource}>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <hr />
        </div>
        <div className={styles.section}>
          <h2>Currency</h2>
          <div className={styles.currency}>
            <img src="/USA.png" alt="United State Umerica Flag" />
            <p>USD</p>
             <hr />
          </div>
          <p style={{ fontSize: "12px",marginTop:"1rem" }}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
    </div>
  );
}
