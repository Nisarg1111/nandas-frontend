import axios from "axios";
import { domainName, api } from "./Constants";
import { request } from "./utils/axios-utils";

// sign up
export const signup = (data) => {
  return axios.post(`${domainName}${api.signup}`, data);
};
