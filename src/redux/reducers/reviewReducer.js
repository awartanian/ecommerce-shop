import { ReviewType } from "../action-types/actionTypes";

export const reviewReducer = (reviews = [], action) => {
  switch (action.type) {
    case ReviewType.FETCH_REVIEWS:
      return action.payload;
    case ReviewType.FETCH_LIMITED_REVIEWS:
      return action.payload;
    case ReviewType.REMOVE_LIMITED_REVIEWS:
      return [];
    case ReviewType.CREATE_REVIEW:
      return [...reviews, action.payload];
    default:
      return reviews;
  }
};
