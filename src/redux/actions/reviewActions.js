import * as api from "../../api/api";
import { ReviewType } from "../action-types/actionTypes";

export const getReviews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReviews();
    dispatch({ type: ReviewType.FETCH_REVIEWS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLimitedReviews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLimitedReviews();
    dispatch({ type: ReviewType.FETCH_LIMITED_REVIEWS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeLimitedReviews  = () => {
  return {
    type: ReviewType.REMOVE_LIMITED_REVIEWS,
  };
};

export const createReview = (review) => async (dispatch) => {
  try {
    const { data } = await api.createReview(review);
    dispatch({ type: ReviewType.CREATE_REVIEW, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
