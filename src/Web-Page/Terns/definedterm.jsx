import React from "react";
import styles from "./termandcondition.module.css";
import Generalprovision from "./generalprovision";
export default function Definedterm() {
  return (
    <div className={ `container ${styles.termscontainer}` }>
      <div className="row">
        <div className={ `col-12 ${styles.termsheader}` }>
          <h2 className={`${styles.termsh2}`}>Terms and Conditions</h2>
          <h5>USER AGREEMENT</h5>
          <h6 className={styles.kiok}>FOR USE OF KFC WEBSITE, MOBILE AND KIOSK APPLICATION</h6>
          <p>Revised on 04.09.2025</p>
        </div>
        <div className="col-12">
          <ol><li><h5> DEFINED TERMS</h5>
           </li></ol>
        <p>
          <b>‘Agreement’</b> means this user agreement.
        </p>
        </div>
         <div className="col-12">
         
        <p>
          <b>‘Application’</b>  means KFC-branded application developed by the Company for iOS and Android mobile operating systems, the website, and for the Self- Service Kiosk to enable ordering and purchasing meals in KFC restaurants, delivering meals, and informing the User about news and promotions of the Company. The provisions of the Agreement also apply to chat bots to the extent that they duplicate the functionality of the Application.
        </p>
        </div>
          <div className="col-12">
          
        <p>
          <b>‘Self-Service Kiosk’</b>  means a machine that allows customers to choose and pay for orders themselves, without involving the restaurant staff in the process.
        </p>
        </div>
          <div className="col-12">
         
        <p>
          <b>‘User’</b>   means a capable individual who has gone through the authorization process or started using the Self-Service Kiosk applications, given his or her consent to personal data processing, and installed the Application on his or her mobile device.
        </p>
        </div>
          <div className="col-12">
         <p>  <b>'Order'</b> means a set of products (meals) of the KFC restaurants formed using the Application, which the User intends to collect at the selected Restaurant.</p>
        <p>
          <b>‘Company’</b>   means Gray Mackenzie Restaurants International Limited(GMRIL) registered in the Companies Ordinance, 1984 (XLVII of 1984) (now the Companies Act, 2017) in Pakistan under the State Registration Number K-06243 at Securities & Exchange Commission of Pakistan (SECP), Government of Pakistan.
        </p>
        </div>
     
      </div>
    </div>
  );
}
