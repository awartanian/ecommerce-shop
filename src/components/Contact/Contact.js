import React, { useEffect } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import Form from "./Form";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="Contact"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="Contact-top-container">
        <h1>do you have questions?</h1>
      </div>
      <div className="Contact-card">
        <Form />
        <div className="Contact-image"></div>
      </div>
    </motion.div>
  );
}

export default Contact;
