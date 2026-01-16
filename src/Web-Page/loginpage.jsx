import React from 'react'
import styles from '././loginpage.module.css'
import login from '././Img/loginimg.gif'
export default function loginpage() {
  
  return (
    <div className={`${styles.loginpage} container`}>
     <div  className={` ${styles.loginrow} `}>
      <div>     
        <div><span className={`material-icons ${styles.icon}`}>arrow_back</span></div>
      <img src={login} alt="Animated GIF" width="300" height="300" />
      </div>
      <div className={`${styles.logininfo}`}>
        <h2>Wellcome!</h2>
        
        <div>
        <label>Email</label>
        <input className={styles.input} type="text"  placeholder='Enter your email' />
       </div>
       <div>
        <label>Password</label>

        <input className={styles.input} type="password" placeholder='Enter your password' />
      </div>
        <button type="submit" className={`${styles.button} btn btn-success`}>Login</button>
      </div>
    </div>
    </div>
  )
}
