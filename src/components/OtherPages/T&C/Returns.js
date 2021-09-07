import React, { useEffect } from "react";
import "./TermsAndPrivacy.scss";
import { motion } from "framer-motion";

function Returns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="Returns"
    >
      <h2>How do I return an item?</h2>
      <p>
        In order to return items, please create a return label in your account
        under ‘Orders & Returns’. In case you want to return a defected item,
        please create a complaint first.
      </p>
      <p>
        Our returns are always free of charge. However, this requires that the
        return is send back with our return label.
      </p>
      <p>Here is a short guide on how to make a return:</p>
      <h4>Create Return Documents</h4>
      <ol>
        <li>You can find your latest order under ‘Orders & Returns’.</li>
        <li>Click the ‘Create return’ button right next to it.</li>
        <li>
          Select the articles you want to return and the reason why you want to
          return them.
        </li>
        <li>
          Click on ‘Continue’ and choose your preferred delivery company for
          your return.
        </li>
        <li>
          As soon as you click on ‘Continue’ your return will be created and the
          return documents are ready for printing.
        </li>
      </ol>
      <h4>Returning the parcel</h4>
      <ol>
        <li>Print your return documents.</li>
        <li>
          Then place the withdrawal form in the parcel together with the items.
        </li>
        <li>
          Seal your parcel and stick the return label on top of the parcel,
          covering the previous label.
        </li>
        <li>Now you can bring your return to a post office or parcel shop.</li>
      </ol>
      <h4>Return period</h4>
      <p>
        For customers without a status or the silver status the regular return
        period of 14 days applies. Customers who have reached the Gold Status
        have 21 days to return goods. If you have the Diamond Status you can
        return items for up to 30 days.
      </p>
      <h4>Return your parcel at one of our Stores</h4>
      <p>
        Yes, as a ARHERA customer holding at least the Silver status or as a
        registered Schustermann & Borenstein customer, you may return items to
        the BestSecret | Schustermann & Borenstein stores in Munich, Dornach,
        Frankfurt or Vienna.
      </p>
      <h4>Original condition</h4>
      <p>
        Please be aware, that all returned items must be in their original
        condition and have to be on their way back to us within the return
        period. The returned articles will be checked thoroughly and if not in
        their original condition, they will be sent back to you.
      </p>
    </motion.div>
  );
}

export default Returns;
