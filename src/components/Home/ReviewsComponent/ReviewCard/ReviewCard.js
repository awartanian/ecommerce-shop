import React from "react";
import moment from "moment";
import "./ReviewCard.scss";

const ReviewCard = ({ reviewInfo }) => {
  const { firstName, lastName, review, imageUrl, createdAt } = reviewInfo;

  return (
    <div className="reviews-section__col">
      <div className="review-card">
        <div className="review-card-top-container">
          <div className="review-card-img-container">
            <img src={imageUrl} alt="user" />
          </div>
          <div className="review-card-user">
            <div className="name">{`${firstName} ${lastName}`}</div>
            <div className="date">{moment(createdAt).format("LL")}</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
        <div className="review-card-underline"></div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
