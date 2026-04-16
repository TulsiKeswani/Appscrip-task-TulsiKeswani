import styles from "./Links.module.css";

export default function Links() {
  return (
    <div className={styles.links}>
      <div className={styles.section1}>
        <h2>mettā muse</h2>
        <div className={styles.linkSection}>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
      </div>
      <div className={styles.section2}>
        <h2>QUICK LINKS</h2>
        <div className={styles.linkSection}>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      <div className={styles.section3}>
        <h2>FOLLOW US</h2>
        <div className={styles.followLinks}>
          <img src="/a.png" alt="Linkedin Logo" />
          <img src="/insta.png" alt="Insta Logo" />
        </div>

        <h2 style={{marginTop:"2rem"}}>mettā muse Accepts</h2>
        <div className={styles.followLinks2}>
          <img src="/gpay.png" alt="Linkedin Logo" />
          <img src="/opus.png" alt="Opus Logo" />
          <img src="/pay.png" alt="PhonePay Logo" />
          <img src="/amex.png" alt="amex Logo" />
          <img src="/applypay.png" alt="ApplePay Logo" />
          <img src="/opay.png" alt="Opay Logo" />
        </div>
      </div>
    </div>
  );
}
