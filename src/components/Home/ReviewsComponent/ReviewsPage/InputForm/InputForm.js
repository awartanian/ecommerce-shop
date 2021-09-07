import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createReview } from "../../../../../redux/actions/reviewActions";
import "./InputForm.scss";

const InputForm = () => {
  const dispatch = useDispatch();

  const [reviewData, setReviewData] = useState({
    firstName: "",
    lastName: "",
    review: "",
    imageUrl:
      "https://live.staticflickr.com/65535/51427137059_69572b0061_c.jpg",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview(reviewData));
  };

  return (
    <div className="form-container">
      <h5>Like our products? </h5>
      <h4>Tell us what you think.</h4>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="left-input-container">
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e) =>
                setReviewData({
                  ...reviewData,
                  firstName: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) =>
                setReviewData({ ...reviewData, lastName: e.target.value })
              }
            />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setReviewData({ ...reviewData, imageUrl: base64 })
              }
            />
          </div>
          <div className="right-input-container">
            <textarea
              placeholder="Review ..."
              required
              onChange={(e) =>
                setReviewData({ ...reviewData, review: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <div className="buttons-container">
          <button className="add" type="submit">
            add review
          </button>
          {/* <button onClick={clear}>clear</button> */}
        </div>
      </form>
    </div>
  );
};

export default InputForm;
