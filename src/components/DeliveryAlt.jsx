import React from 'react'
import styles from "./LastPay.module.css"
const DeliveryAlt = () => {
  return (
    <>
      <div className={styles.centerFistDiv}>
        <p>Delivery Method</p>
        <div className={styles.deliveryMethod}>
          <div>
            <div>
              <input
                type="checkbox"
                className={styles.checkbox_round}
              />
            </div>
            <div>
              <p>STANDARD Delivery</p>
              <p>Delivered on or before 27 May</p>
            </div>
          </div>
          <div className={styles.inrtwo}>INR 1,710.00</div>
          <div>
            <div>
              <input
                type="checkbox"
                className={styles.checkbox_round}
              />
            </div>

            <div>
              <p>EXPRESS Delivery</p>
              <p>Delivered on or before 12 May</p>
            </div>
          </div>
          <div className={styles.inrtwo}>INR 2,052.00</div>
        </div>
      </div>


    </>
  )
}

export default DeliveryAlt