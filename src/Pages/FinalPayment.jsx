import React from "react";
import styles from "../components/styles/FinalPayment.module.css";

export default function FinalPayment() {
    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.parentLeft}>
                    <div className={styles.leftTop}>
                        <div className={styles.innerLeftTop}>
                            <div
                                className={styles.Header}
                                style={{ marginBottom: 15 }}
                            >
                                <i className="fa-solid fa-circle-check"></i>
                                <h2>Delivery Address</h2>
                            </div>
                            <div className={styles.address}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div className={styles.addressPara}>
                                        <p>Name</p>
                                        <p>Address</p>
                                        <p>City</p>
                                        <p>State</p>
                                        <p>India</p>
                                    </div>
                                    <p
                                        style={{
                                            textDecoration: "underline",
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                            color: "gray",
                                            fontSize: 14,
                                        }}
                                    >
                                        EDIT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.leftBottom}>
                        <div className={styles.leftBottomWrapper}>
                            <h2
                                style={{
                                    marginBottom: "20px",
                                }}
                            >
                                Payment
                            </h2>

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
                                    <div className={styles.cardInput1}>
                                        <input
                                            className={styles.cardNumber}
                                            type="text"
                                            placeholder="Card Number *"
                                        />
                                        <i className="fa-solid fa-lock"></i>
                                    </div>
                                    <br />
                                    <div className={styles.cardLastDate}>
                                        <input
                                            type="text"
                                            placeholder="MM/YY *"
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVV *"
                                        />
                                        <i className="fa-solid fa-circle-question"></i>
                                    </div>
                                    <br />
                                    <div className={styles.nameOnTheCard}>
                                        <input
                                            type="text"
                                            placeholder="Name on card *"
                                        />
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
                                    <div>
                                        <div>
                                            <p className={styles.payNowLast}>
                                                By clicking Pay Now, you agree
                                                to eShopWorld's{" "}
                                                <a href="">
                                                    Terms and Conditions
                                                </a>{" "}
                                            </p>
                                        </div>
                                        <div
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <div
                                                className={styles.paymentButton}
                                            >
                                                PAY NOW
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sideDiv}>
                    <div>
                        <div className={styles.backToCart}>BACK TO CART</div>
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
            </div>
        </div>
    );
}
