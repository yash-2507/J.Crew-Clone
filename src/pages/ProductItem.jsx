import React, { useEffect, useState } from "react";
import styles from "./ProductItem.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeVariantColor } from "../redux/actions";

const ProductItem = ({ item }) => {
  const [rupee, setRupee] = useState(0);
  const [showProductPopup, setShowProductPopup] = useState(false);
  const { products_data, data } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChangeColor = (variantID) => {
    let changeData = [...products_data];
    changeData.map((el) => {
      return (
        el.id === item.id &&
        el.variant.map((innerEl) => {
          return innerEl.id === variantID
            ? (innerEl.status = true)
            : (innerEl.status = false);
        })
      );
    });
    dispatch(handleChangeVariantColor(changeData));
  };

  useEffect(() => {
    const handleIndianRupees = () => {
      let x = item.price;
      x = x.toString();
      let lastThree = x.substring(x.length - 3);
      let otherNumbers = x.substring(0, x.length - 3);
      if (otherNumbers !== "") lastThree = "," + lastThree;
      let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      setRupee(res);
    };
    handleIndianRupees();
  }, [item]);
  return (
    <div className={styles.product_item}>
      <div className={styles.relative}>
        <div className={styles.img_box}>
          {item.variant.map((el) => {
            return el.status && <img key={el.id} src={el.thumb} alt="" />;
          })}
        </div>
        <div className={styles.icon_box}>
          <FavoriteBorderIcon />
        </div>
        <div className={styles.quick_shop_btn}>
          <button>Quick Shop</button>
        </div>
      </div>
      <div className={styles.product_details}>
        <p className={styles.product_name}>{item.title}</p>
        <p className={styles.product_price}>INR {rupee}</p>
        <div className={styles.colors}>
          {item.variant.map((el) => {
            return (
              <div
                key={el.id}
                onClick={() => handleChangeColor(el.id)}
                className={`${styles.dummy} ${
                  el.status && styles.active_color_box
                }`}
              >
                <div className={`${styles.color_box}`}>
                  <img src={el.thumb} alt="" />
                </div>
              </div>
            );
          })}
          {/* {item.colors.map((el, index) => {
            return <Color key={index} color={el} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
