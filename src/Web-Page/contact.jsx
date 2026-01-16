import React from "react";
import styles from "./contact.module.css";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="container py-4">
      <div className={`row g-4 ${styles.contactrow}`}>
        <div className={`${styles.title} about-title mb-0 col-12`}>Contact Us</div>
        {/* Head Office */}
        <div className=" col-lg-4 col-12">
          <div className={styles.card}>
            <h5 className={styles.heading}>
              <MdCall className={styles.icon} />
              Head Office
            </h5>
            <p>0213-5877976</p>

            <h6 className={styles.subHeading}>
              <MdLocationOn className={styles.icon} />
              Location
            </h6>
            <p>
              Ocean Tower, 20th Floor, Clifton Road, Karachi, Pakistan
            </p>
          </div>
        </div>

        {/* Lahore */}
        <div className="col-lg-4 col-12">
          <div className={styles.card}>
            <h5 className={styles.heading}>
              <MdCall className={styles.icon} />
              Regional Office Lahore
            </h5>
            <p>042-35884570</p>

            <h6 className={styles.subHeading}>
              <MdLocationOn className={styles.icon} />
              Location
            </h6>
            <p>
              27-A Ali Block, Garden Town, Opposite Barkat Market, Lahore
            </p>
          </div>
        </div>

        {/* Islamabad */}
        <div className="  col-lg-4 col-12">
          <div className={styles.card}>
            <h5 className={styles.heading}>
              <MdCall className={styles.icon} />
              Regional Office Islamabad
            </h5>
            <p>051-2726877</p>

            <h6 className={styles.subHeading}>
              <MdLocationOn className={styles.icon} />
              Location
            </h6>
            <p>
              United Bakery Building, School Rd, F-6 Markaz, Islamabad
            </p>
          </div>
        </div>

        {/* Helpline */}
        <div className="col-lg-6  col-12">
          <div className={styles.highlight}>
            <h5>
              <MdCall className={styles.icon} /> Helpline
            </h5>
            <p>UAN: 111 532 532</p>
          </div>
        </div>

        {/* Email */}
        <div className="col-lg-6  col-12">
          <div className={styles.highlight}>
            <h5>
              <MdEmail className={styles.icon} /> Complaints Email
            </h5>
            <p>customercare@kfcpakistan.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}
