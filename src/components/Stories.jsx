import React from "react";
import styles from "./stories.module.css";


const Story=()=> {
    return (
        <div className={styles.main_div}>
            <div className={styles.box1}>
                <div className={styles.pic1}>
                    <h1>In the lab</h1>
                    <h1>with Cliff Kapono</h1>
                </div>
                <div className={styles.back1}>
                    <div className={styles.para}>
                        <p>Meet pro surfer, journalist, and PhD scientist Cliff Kapono, cofounder of MEGA Lab in Hilo, Hawaii. This nonprofit environmental community of scientists, athletes and artists uses research and storytelling to help protect and preserve the local reefs—and we’re proud to have made a donation to support their efforts. Scroll to learn more about MEGA Lab, and see Cliff in our new Spring Collection (sustainable swim trunks included).</p>
                    </div>
                </div>
                </div>
                <div className={styles.box2}></div>
        </div>

        )
    }
    
    export default Story;