import React from "react";
import styles from "./bag.module.css";


const Bag=()=> {
    return (
    <div className={styles.parent_div}>
        <div className={styles.first_div}>
            <div className={styles.div1}>
                <div className={styles.div12}>
                    <h3>SHOPPING BAG</h3>
                </div>
                <div className={styles.div13}>
                    <div className={styles.div131}>
                        <div className={styles.itm}>ITEM</div>
                        <div className={styles.prc}>PRICE</div>
                        <div className={styles.qty}>QTY</div>
                        
                    </div>
                    <div className={styles.div132}>
                        <div className={styles.box1}>
                            <img src="https://www.jcrew.com/s7-img-facade/BF051_PK5748?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=408&hei=408"></img>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.bo1}>
                                <h4>Girls' ankle-strap sandals</h4>
                                <p>Item BF051</p>
                                <p>Size: K10</p>
                                <p>Color: Tea Rose</p>
                            </div>
                            <div className={styles.bo2}>
                                <button>Remove</button>
                                <button>Save for later</button>
                                <button>Edit</button>
                            </div>
                        </div>
                        <div className={styles.box3}>
                            <span>INR 15,260.00</span>
                        </div>
                        <div className={styles.box4}>
                            <button >-</button>
                            <div><p>2</p></div>
                            <button >+</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.div2}>
                <div className={styles.div21}>
                    <h3>SAVED FOR LATER</h3>
                </div>
                <div className={styles.div22}>
                    <p>Your Saved for Later is empty.</p>
                </div>
            </div>
        </div>
        <div className={styles.second_div}>
            <div className={styles.last1}>
                <div className={styles.price}>
                    <div className={styles.left}>Item Subtotal</div>
                    <div className={styles.right}>INR 15,260.00</div>
                </div>
                <div className={styles.estm}>
                    <div className={styles.left1}>
                        <h4>Estimated Total</h4>
                        <p>Shipping calculated in Checkout</p>
                    </div>
                    <div className={styles.right1}>INR 15,220.00</div>
                </div>
            </div>
            <div className={styles.last2}>
                <button>CHECK OUT NOW</button>
                <div className={styles.para}>
                <p>By clicking ‘Check Out Now’, you will be redirected to the eShopWorld checkout page where payment will be taken and your order fulfilled by eShopWorld, J.Crew's preferred partner for international sales.</p>
            </div>
            </div>
            <div className={styles.last3}>
                <h3>Add a promo</h3>
            <input type="number" placeholder='Promo'/>
            <button>APPLY</button>
            </div>
        </div>
         
     

    </div>
    )
}

export default Bag;