import React from 'react'
import styles from "./termandcondition.module.css";
import Definedterm from './definedterm';
import Rightobligation from './rightobligation';
import Generalprovision from './generalprovision';
import Payment from './payment';
export default function termandcondition() {
  return (
   <>
   <div className="container">
   <Definedterm />
   <Generalprovision />
   <Payment />
   <Rightobligation />
   </div>
   </>

  )
}
