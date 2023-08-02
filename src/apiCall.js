import axios from "axios";
import { domainName, api } from "./Constants";
import { request } from "./utils/axios-utils";

const token = sessionStorage.getItem("token");

// sign up
export const signup = (data) => {
  return axios.post(`${domainName}${api.signup}`, data);
};

// check whether the email is available or not
export const checkEmailAvailability = (data) => {
  return axios.post(`${domainName}${api.emailAvailability}`, data);
};

// sign up
export const login = (data) => {
  return axios.post(`${domainName}${api.login}`, data);
};

// get user details
export const fetchUser = () => {
  return request({ url: `${domainName}${api.profile}`, method: "get" });
};

// update user details
export const updateUser = (data) => {
  return request({ url: `${domainName}${api.profile}`, method: "put", data });
};

// update user details
export const updateProfileImg = (data) => {
  return request({
    url: `${domainName}${api.updateProfileImg}`,
    method: "post",
    data,
  });
};

// get all products
export const fetchAllProducts = () => {
  return axios.get(`${domainName}${api.allProducts}`);
};

// get categories
export const categoriesList = () => {
  return axios.get(`${domainName}${api.categories}`);
};

// get recent products
export const fetchRecentProducts = () => {
  return axios.get(`${domainName}${api.recentProducts}`);
};

// get popular products
export const fetchPopularProducts = () => {
  return axios.get(`${domainName}${api.popularProducts}`);
};

// get product info
export const fetchProductInfo = ({ queryKey }) => {
  return axios.get(`${domainName}${api.productInfo}${queryKey[1]}`);
};

// get cart items
export const getCart = () => {
  return request({ url: `${domainName}${api.cart}`, method: "get" });
};

// add item to cart
export const addToCart = (data) => {
  return request({
    url: `${domainName}${api.addToCart}`,
    method: "post",
    data,
  });
};

// add item to cart
export const updateQuantity = (data) => {
  return request({
    url: `${domainName}${api.updateQuantity}`,
    method: "put",
    data,
  });
};

// delete from cart
export const deleteFromCart = (productId) => {
  return request({
    url: `${domainName}${api.deleteFromCart}${productId}`,
    method: "delete",
  });
};
