import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../components/styles/Mens.module.css";

export default function Mens() {
  useEffect(() => {
    document.title = "Men's Clothing | J.Crew";
    // console.log(window.pageYOffset)
    if (window.pageYOffset > 300) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.headWrap}>
          <div className={styles.headImg}>
            <div className={styles.headContent}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <h1 className={styles.headContent1}>Suited</h1>
                <h2 className={styles.headContent2}>FOR SUMMER</h2>
              </div>
              <h4 className={styles.headContent3}>
                All the laid-back (yet polished) fits and premium fabrics for
                your warm-weather occasions.
              </h4>
              <h5 className={styles.headContent4}>Visit the suit shop</h5>
            </div>
          </div>
        </div>
        <div className={styles.midWrap}>
          <h3>Shops, stories & more</h3>
          <div className={styles.midImgWrap}>
            <div className={styles.midImg}>
              <Link to="/products/mens">
                <img
                  src="https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0506_flyouts_m_img0.jpg"
                  alt=""
                />
                <h4>Suited for summer</h4>
              </Link>
            </div>
            <div className={styles.midImg}>
              <Link to="/products/mens">
                <img
                  src="https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0506_flyouts_m_img1.jpg"
                  alt=""
                />
                <h4>New Arrivals</h4>
              </Link>
            </div>
            <div className={styles.midImg}>
              <Link to="/products/mens">
                <img
                  src="https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0506_flyouts_m_img2.jpg"
                  alt=""
                />
                <h4>The sports report</h4>
              </Link>
            </div>
            <div className={styles.midImg}>
              <Link to="/products/mens">
                <img
                  src="https://www.jcrew.com/brand_creative/2022/202205-May/flyout/2022may_0506_flyouts_m_img3.jpg"
                  alt=""
                />
                <h4>Best in swim since 1983</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.mainAboveFooter}>
          <h2 style={{ fontSize: 36, fontWeight: 400 }}>
            More you need to see
          </h2>
          <div className={styles.aboveFooterImgWrap}>
            <div className={styles.aboveFooterInner}>
              <img
                src="https://www.jcrew.com/s7-img-facade/BH290_BL8486_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Dresses & Jumpsuits</h5>
              </div>
            </div>
            <div className={styles.aboveFooterInner}>
              <img
                src="https://www.jcrew.com/s7-img-facade/AY671_BK0001?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Shirts & Tops</h5>
              </div>
            </div>
            <div className={styles.aboveFooterInner}>
              <img
                src="https://www.jcrew.com/s7-img-facade/BG652_SU8788_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Sweaters</h5>
              </div>
            </div>
            <div className={styles.aboveFooterInner}>
              <img
                src="https://www.jcrew.com/s7-img-facade/AW770_OR5787_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's The Tees Shop</h5>
              </div>
            </div>
            <div className={styles.aboveFooterInner}>
              <img
                src="https://www.jcrew.com/s7-img-facade/BL371_BL8133_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Sweatshirts & Sweatpants</h5>
              </div>
            </div>
            <div className={styles.aboveFooterInner}>
              <img
                src="https://www.jcrew.com/s7-img-facade/BC108_BL8133_m?wid=416"
                alt=""
              />
              <div>
                <h5>Shop Women's Swimwear</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
