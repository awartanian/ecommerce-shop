import React from "react";
import HeroSlider from "./HeroSlider/HeroSlider";
import DealsComponent from "./DealsComponent/DealsComponent";
import Reviews from "./ReviewsComponent/Reviews";
import { motion } from "framer-motion";
import Trending from "./TrendingComponent/Trending";

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <HeroSlider />
      <DealsComponent />
      <Trending />
      <Reviews />
    </motion.div>
  );
}

export default Home;
