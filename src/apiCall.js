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

// get all products
export const fetchAllProducts = ()=>{
  return axios.get(`${domainName}${api.allProducts}`)
}

// get categories
export const categoriesList = ()=>{
  return axios.get(`${domainName}${api.categories}`)
}

// get recent products
export const fetchRecentProducts = ()=>{
  return axios.get(`${domainName}${api.recentProducts}`)
}

// get popular products
export const fetchPopularProducts = ()=>{
  return axios.get(`${domainName}${api.popularProducts}`)
}

// get product info
export const fetchProductInfo = ({queryKey})=>{
  return axios.get(`${domainName}${api.productInfo}${queryKey[1]}`)
}