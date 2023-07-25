import axios from "axios";
import { domainName, api } from "./Constants";
import { request } from "./utils/axios-utils";

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
