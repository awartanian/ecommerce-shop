import axios from "axios";

//////// API FOR REVIEWS ////////

const urlReviews = "https://ecommerce-reviews.herokuapp.com/api/reviews";

export const fetchReviews = () => axios.get(urlReviews);
export const fetchLimitedReviews = () => axios.get(`${urlReviews}?limit=4`);
export const createReview = (newReview) => axios.post(urlReviews, newReview);

//////// API FOR PRODUCTS ////////

const urlProducts = "https://fakestoreapi.com/products";

export const fetchProducts = () => axios.get(urlProducts);
export const fetchSelectedProduct = (id) => axios.get(`${urlProducts}/${id}`);
