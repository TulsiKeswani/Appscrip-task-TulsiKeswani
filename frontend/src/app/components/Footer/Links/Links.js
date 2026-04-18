"use client";
import { useState, useEffect } from "react";
import styles from "./Links.module.css";
import { ChevronDown } from "lucide-react";

export default function Links() {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // screen detect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    if (!isMobile) return;
    setOpenSection(openSection === section ? null : section);
  };

  const showSection = (section) => {
    return !isMobile || openSection === section;
  };

  return (
    <div className={styles.links}>
      
      {/* SECTION 1 */}
      <div className={`${styles.section} ${styles.section1}`}>
        <div className={styles.heading}>
          <h2>mettā muse</h2>
          {isMobile && (
            <ChevronDown
              className={styles.dropDownIcon}
              onClick={() => toggleSection("section1")}
            />
          )}
        </div>

        {showSection("section1") && (
          <div className={styles.linkSection}>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
        )}
      </div>

      <hr />

      {/* SECTION 2 */}
      <div className={`${styles.section} ${styles.section2}`}>
        <div className={styles.heading}>
          <h2>QUICK LINKS</h2>
          {isMobile && (
            <ChevronDown
              className={styles.dropDownIcon}
              onClick={() => toggleSection("section2")}
            />
          )}
        </div>

        {showSection("section2") && (
          <div className={styles.linkSection}>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        )}
      </div>

      <hr />

      {/* SECTION 3 */}
      <div className={`${styles.section} ${styles.section3}`}>
        <div className={styles.heading}>
          <h2>FOLLOW US</h2>
          {isMobile && (
            <ChevronDown
              className={styles.dropDownIcon}
              onClick={() => toggleSection("section3")}
            />
          )}
        </div>

        {showSection("section3") && (
          <>
            <div className={styles.followLinks}>
              <img src="/a.png" alt="Linkedin Logo" />
              <img src="/insta.png" alt="Insta Logo" />
            </div>

            <hr />

            <h2 style={{ marginTop: "1rem" }}>
              mettā muse Accepts
            </h2>

            <div className={styles.followLinks2}>
              <img src="/gpay.png" alt="GPay" />
              <img src="/opus.png" alt="Opus" />
              <img src="/pay.png" alt="PhonePay" />
              <img src="/amex.png" alt="Amex" />
              <img src="/applypay.png" alt="ApplePay" />
              <img src="/opay.png" alt="Opay" />
            </div>
          </>
        )}
      </div>

    </div>
  );
}