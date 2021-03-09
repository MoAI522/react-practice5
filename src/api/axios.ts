import axiosPackage from "axios";

const axios = axiosPackage.create({
  baseURL: `https://${process.env.HOST}/api/`,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${process.env.BEARER_AUTHORIZATION_CODE}`,
  },
});

export default axios;
