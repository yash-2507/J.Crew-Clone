import React from "react";
import styles from "./styles/MainPage.module.css";

export default function MainPage() {
    return (
        <div className={styles.mainParent}>
            <div className={styles.mainPage_navigation}>
                <div className={styles.navigationWrapper}>
                    <div className={styles.navivationTitle}>
                        Shop New Arrivals
                    </div>
                    <div className={styles.navigationBtnWrap}>
                        <button className={styles.navigationBtn}>
                            Shop Women
                        </button>
                        <button className={styles.navigationBtn}>
                            Shop Men
                        </button>
                        <button className={styles.navigationBtn}>
                            Shop Boys
                        </button>
                        <button className={styles.navigationBtn}>
                            Shop Girls
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.mainMid}>
                <div className={styles.headlineHed}>
                    <img
                        className={styles.headImg}
                        src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic"
                        alt=""
                    />
                    <div className={styles.headDes}>
                        Meet our creative community
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>

                <div className={styles.mainMidImg}>
                    <div className={styles.mainMidImgWrap}>
                        <img
                            src="https://www.jcrew.com/brand_creative/homepage2022/05-May2/2022may_0503_hp_w_img7.jpg"
                            alt=""
                        />
                        <h2 className={styles.mainMidH1}>1 piece, 2 ways</h2>
                        <h2 className={styles.mainMidH2}>
                            How I wear my Astrid chinos with Jen Azoulay
                        </h2>
                        <div className={styles.mainSpan}>
                            Copy these outfits
                        </div>
                    </div>
                    <div className={styles.mainMidImgWrap}>
                        <img
                            src="https://www.jcrew.com/brand_creative/homepage2022/05-May2/2022may_0503_hp_w_img8.jpg"
                            alt=""
                        />
                        <h2 className={styles.mainMidH1}>What to wear next</h2>
                        <h2 className={styles.mainMidH2}>
                            The next Dress code with Beverly Nguyen
                        </h2>
                        <div className={styles.mainSpan}>
                            Find her everyday picks
                        </div>
                    </div>
                    <div className={styles.mainMidImgWrap}>
                        <img
                            src="https://www.jcrew.com/brand_creative/homepage2022/05-May2/2022may_0503_hp_w_img9.jpg"
                            alt=""
                        />
                        <h2 className={styles.mainMidH1}>
                            The new arrivals edit
                        </h2>
                        <h2 className={styles.mainMidH2}>
                            Instant classics with Alison Bornstein
                        </h2>
                        <div className={styles.mainSpan}>
                            Shop her timeless style
                        </div>
                    </div>
                </div>

                <span
                    style={{
                        marginLeft: 161.6,
                        fontSize: 54.4,
                        fontWeight: "400",
                    }}
                >
                    More Stories
                </span>
                <div className={styles.mainMidBottom}>
                    <div>
                        <img
                            src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img11.jpg"
                            alt=""
                        />
                        <h2 className={styles.innerHead}>
                            The edit: sunny outlook
                        </h2>
                        <span className={styles.innerSpan}>
                            Shop the color story
                        </span>
                    </div>
                    <div>
                        <img
                            src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img12.jpg"
                            alt=""
                        />
                        <h2 className={styles.innerHead}>
                            Most wanted the Candiz rope tote
                        </h2>
                        <span className={styles.innerSpan}>
                            See why we're obsessed
                        </span>
                    </div>
                    <div>
                        <img
                            src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img13_new.jpg"
                            alt=""
                        />
                        <h2 className={styles.innerHead}>
                            The edit: block-print paradise
                        </h2>
                        <span className={styles.innerSpan}>
                            Shop the print focus
                        </span>
                    </div>
                    <div>
                        <img
                            src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img14.jpg"
                            alt=""
                        />
                        <h2 className={styles.innerHead}>
                            Design Try-ons: The April Collection
                        </h2>
                        <span className={styles.innerSpan}>Shop the video</span>
                    </div>
                </div>
            </div>

            <div className={styles.mainAboveFooter}>
                <h2 style={{ fontSize: 36, fontWeight: 400 }}>
                    More you need to see
                </h2>
                <div className={styles.aboveFooterImgWrap}>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/BH290_BL8486_m?wid=416" alt="" />
                        <div>
                            <h5>Shop Women's Dresses & Jumpsuits</h5>
                        </div>
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/AY671_BK0001?wid=416" alt="" />
                        <div>
                            <h5>Shop Women's Shirts & Tops</h5>
                        </div>
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/BG652_SU8788_m?wid=416" alt="" />
                        <div>
                            <h5>Shop Women's Sweaters</h5>
                        </div>
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/AW770_OR5787_m?wid=416" alt="" />
                        <div>
                            <h5>Shop Women's The Tees Shop</h5>
                        </div>
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/BL371_BL8133_m?wid=416" alt="" />
                        <div>
                            <h5>Shop Women's Sweatshirts & Sweatpants</h5>
                        </div>
                    </div>
                    <div className={styles.aboveFooterInner}>
                        <img src="https://www.jcrew.com/s7-img-facade/BC108_BL8133_m?wid=416" alt="" />
                        <div>
                            <h5>Shop Women's Swimwear</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
