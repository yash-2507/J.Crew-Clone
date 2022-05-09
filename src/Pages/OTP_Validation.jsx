import React from "react";
import { useNavigate } from "react-router-dom";
import { Phone } from "../components/Icons";
import styles from "../components/styles/OTP_Validation.module.css";

const OtpPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        alert("🤩 Your Order has been placed");
        setTimeout(() => navigate("/"), 3000);
    };
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.modal_head}>OTP Verification</div>
                <div className={styles.modal_mid}>
                    <div className={styles.phoneCover}>
                        <Phone />
                    </div>
                    <h4>Enter the One-Time-Password</h4>
                    <div className={styles.inputWrapper}>
                        <input type="text" placeholder="#" />
                        <input type="text" placeholder="#" />
                        <input type="text" placeholder="#" />
                        <input type="text" placeholder="#" />
                    </div>
                </div>
                <div className={styles.modal_bottom}>
                    <h5>Resend code ?</h5>
                    <div
                        className={styles.verifyBtn}
                        onClick={() => handleClick()}
                    >
                        VERIFY
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpPage;
