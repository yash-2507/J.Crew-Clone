import React from 'react'
import styles from './OtpPage.module.css'
const OtpPage = () => {
    const handleClick = () => {
       alert("🤩 Your Order has been placed")
    }
  return (
    <div className={styles.maxWitdthDiv}>
       <div className="d-flex justify-content-center align-items-center container">
           <div className="card py-5 px-3" >
             <h5 className="m-0">OTP Verification</h5> 
             <span className="mobile-text">Enter The code we just send on your Mobile Phone   
             <b className="text-danger">+91 81234 98765</b>
             </span> 
             <div className="d-flex flex-row mt-5">
                 <input type="text" className="form-control" autofocus="" />
                 <input type="text" className="form-control"  />
                 <input type="text" className="form-control"  />
                 <input type="text" className="form-control"  />
             </div>
             <br />
             <div className={styles.submitBtn}>
                <button onClick={()=>handleClick()}>SUBMIT</button>
             </div>

             <div className="text-center mt-5">
                 <span className="d-block mobile-text">Don't Recieve the code?</span>
                 <span className="font-weight-bold text-danger cursor ">Resend Code</span>
             </div>
           </div>
       </div>
    </div>
  )
}

export default OtpPage