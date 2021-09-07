import React, { useEffect } from "react";
import CustomerServiceComp from "../CustomerServiceComp";
import "./Vouchers.scss";
import { motion } from "framer-motion";

function Vouchers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="Vouchers"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <h2 className="Vouchers-title">vouchers</h2>
      <div className="Vouchers-wrapper">
        <div className="Vouchers-wrapper-left">
          <div className="Vouchers-left-top">
            <div className="Vouchers-left-top-content">
              <h2>Looking for a gift?</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, praesentium sed cupiditate odio repellat delectus
                labore ipsum iste, modi nostrum impedit quaerat aliquid quis
                voluptate officia magni commodi.
              </p>
              <button>gift a voucher</button>
            </div>
            <div className="image"></div>
          </div>
          <div className="Vouchers-left-bottom">
            <h4>Transfer vouchers to account</h4>
            <div className="Vouchers-left-bottom-wrap">
              <input type="text" placeholder="Voucher code" />
              <button>Transfer</button>
            </div>
          </div>
        </div>
        <CustomerServiceComp />
      </div>
    </motion.div>
  );
}

export default Vouchers;
