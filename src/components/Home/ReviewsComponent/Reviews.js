import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from "./ReviewCard/ReviewCard";
import { getLimitedReviews, removeLimitedReviews } from "../../../redux/actions/reviewActions";
import Spinner from "../../../images/spinner.gif";
import "./Reviews.scss";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLimitedReviews());
    dispatch(removeLimitedReviews());
  }, [dispatch]);

  return (
    <div className="reviews-section">
      <h3>Customer Reviews</h3>
      <p>What our customers say about our products</p>
      <div className="reviews-section__row">
        {!reviews.length ? (
          <div className="reviews-spinner">
            <img src={Spinner} alt="Loading spinner" />
          </div>
        ) : (
          <div className="reviews-section__row">
            {reviews.map((reviewInfo) => (
              <ReviewCard key={reviewInfo._id} reviewInfo={reviewInfo} />
            ))}
          </div>
        )}
      </div>
      <div className="reviews-section-button-box">
        <Link to="/reviews">
          <button>See more customer reviews</button>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
