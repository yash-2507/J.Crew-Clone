import React, { useState } from "react";
import DeliveryAlt from "./DeliveryAlt";
import styles from "./LastPay.module.css";

const LastPayment = () => {
  const [edit, setEdit] = useState(true);
  console.log(edit);

  return (
    <div className={styles.maxDiv}>
      <div className={styles.container}>
        {/* center first div */}
        <div className={styles.centerFistDiv}>
          <div className={styles.centerFirstDiv_inner}>
            <div>
              <i className="fa-solid fa-circle-check"></i>
              <p>Delivery Address</p>
            </div>
            <div>
              <div>
                <p>prayash</p>
                <p>asdasf</p>
                <p>adfas</p>
                <p>siliguri</p>
                <p>ergz</p>
              </div>
              <div>
                <p onClick={() => setEdit(!edit)}>
                  <u>Edit</u>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* center second div */}
        <div className={styles.sideDiv}>
          <div>
            <div>BACK TO CART</div>
            <p>Kids' half-zip rash guard with UPF 50+</p>
            <div className={styles.productDes}>
              <div>
                <img
                  src="https://www.jcrew.com/s7-img-facade/BH167_WY9090?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=408&hei=408"
                  alt=""
                />
              </div>
              <div>
                <p>Item:</p>
                <p>Quantity:</p>
                <p>Color:</p>
                <p>Size:</p>
                <p>Price:</p>
              </div>
              <div>
                <p>BH167</p>
                <p>1</p>
                <p>NAVY</p>
                <p>SMALL</p>
                <p>INR 7,035.00</p>
              </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div className={styles.sideLstPay}>
              <p>Items</p>
              <p>INR 7.035.00</p>
            </div>
            <div className={styles.sideLstPay2}>
              <p>Delivery</p>
              <p>INR 1,710.00</p>
            </div>
            <div className={styles.sidelstTotal}>
              <p>TOTAL</p>
              <p>INR 8,745.00</p>
            </div>
          </div>
        </div>

        {/* Center Main Part div */}

        <div className={styles.centerSecDIv}>
          <div>
            <p>Payment</p>

            <div className={styles.addressBar}>
              <input type="checkbox" />
              <p>Billing address same as delivery address</p>
            </div>
            <br />
            <div className={styles.cardDiv}>
              <i className="fa-solid fa-credit-card"></i>
              <p>Card</p>
            </div>
            <br />
            <div className={styles.displayCardDiv}>
              <div>
                <div>
                  <input
                    className={styles.cardNumber}
                    type="text"
                    placeholder="Card Number *"
                  />
                  <i className="fa-solid fa-lock"></i>
                </div>
                <br />
                <div className={styles.cardLastDate}>
                  <input type="text" placeholder="MM/YY *" />
                  <input type="text" placeholder="CVV *" />
                  <i className="fa-solid fa-circle-question"></i>
                </div>
                <br />
                <div className={styles.nameOnTheCard}>
                  <input type="text" placeholder="Name on card *" />
                </div>
                <br />
                <div className={styles.cardPhotos}>
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.3oJG6k7jSxQHmkjN9aRvNQHaDA&pid=Api&P=0&w=421&h=171"
                    alt=""
                  />
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.YbjoXNR5vHk40HALX9MmXAAAAA&pid=Api&P=0&w=56&h=35"
                    alt=""
                  />
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.fgkwCuz-ovfAcVMJP5srtwHaEK&pid=Api&P=0&w=276&h=155"
                    alt=""
                  />
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.FGAMR-XYlKe0iQTjmMtXNgHaHa&pid=Api&P=0&w=167&h=167"
                    alt=""
                  />
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.iGzlVx9T1wLqIdERUJHvnAHaHa&pid=Api&P=0&w=161&h=161"
                    alt=""
                  />
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.kQEaukiihSbaYOj_8jCVDgHaEK&pid=Api&P=0&w=295&h=166"
                    alt=""
                  />
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.RMwjZ66K8SvqAfffRH6pGgAAAA&pid=Api&P=0&w=169&h=169"
                    alt=""
                  />
                </div>

                <br />
                <div className={styles.payNowLast}>
                  <div>
                    <p>
                      By clicking Pay Now, you agree to eShopWorld's{" "}
                      <a href="">Terms and Conditions</a>{" "}
                    </p>
                  </div>
                  <div>PAY NOW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPayment;
