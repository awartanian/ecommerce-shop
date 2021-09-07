import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { getReviews, removeLimitedReviews } from "../../../../redux/actions/reviewActions";
import ReviewCard from "../ReviewCard/ReviewCard";
import InputForm from "./InputForm/InputForm";
import spinner from "../../../../images/spinner.gif";
import "./ReviewsPage.scss";

const ReviewsPage = () => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getReviews());
    dispatch(removeLimitedReviews());
  }, [dispatch]);
  
  return (
    <motion.div
      className="reviews-page"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {!reviews?.length ? (
        <div className="reviews-spinner">
          <img src={spinner} alt="Loading spinner" />
        </div>
      ) : (
        <div className="reviews-page__row">
          {reviews.map((reviewInfo) => (
            <ReviewCard key={reviewInfo._id} reviewInfo={reviewInfo} />
          ))}
        </div>
      )}

      <InputForm />
    </motion.div>
  );
};

export default ReviewsPage;
