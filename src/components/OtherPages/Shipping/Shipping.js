import React, { useEffect } from "react";
import ShippingTable from "./ShippingTable";
import "./Shipping.scss";

import { motion } from "framer-motion";

function Shipping() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="Delivery-wrapper"
    >
      <h2>How long does it take for my parcel to be delivered?</h2>
      <span>The usual delivery times are as follows:</span>
      <table>
        <ShippingTable />
      </table>
      <p>
        Since all our items are immediately available, we can process your order
        as soon as it comes in. Our Diamond Status customers enjoy the privilege
        of priority packing, which means your order will be sent out even
        faster.
      </p>
      <p>
        You will be informed by email, immediately after your order has left our
        warehouse.
      </p>
      <p>
        You can also see the status of your order under ‘Orders & Returns’. A
        click on "Track delivery" will take you directly to the delivery status.
      </p>
      <p>
        In addition, you have the option to receive notifications on the actual
        status of your delivery from our shipping partner. This option can be
        changed at any time under ‘Password & contact information’.
      </p>
    </motion.div>
  );
}

export default Shipping;
