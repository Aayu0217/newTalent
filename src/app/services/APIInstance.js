import axios from "axios";
import { DEVICE_TYPE } from "../utils/Constant";
import { STATUS_CODES } from "../utils/statusCode";
import { getErrorMessage } from "../utils/errorCodes";

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Device-Type": DEVICE_TYPE.ONE,
    "Device-Id": process.env.NEXT_PUBLIC_DEVICE_ID,
    "Device-Token": process.env.NEXT_PUBLIC_DEVICE_TOKEN,
    "device-timezone": "Asia/Kolkata",
  },
});

// Add interceptors to include token and handle response codes
// apiInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN); // Fetch token from local storage
//     if (token) {
//       // config.headers["access-token"] = token; // Add the 'access-token' header
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

apiInstance.interceptors.response.use(
  (response) => {
    const { code } = response.data;
    if (code !== STATUS_CODES.SUCCESS) {
      // toast.error(localizationManager.translate(getErrorMessage(code)));
      Toster(t(getErrorMessage(code)), "error");
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    if (error.response?.data?.code) {
      // toast.error(
      //   localizationManager.translate(getErrorMessage(error.response.data.code))
      // );
      Toster(t(getErrorMessage(error.response?.data?.code)), "error");
      return Promise.reject(error);
    } else {
      const statusCode = error.response?.status || STATUS_CODES.INTERNAL_SERVER_ERROR;
      // toast.error(localizationManager.translate(getErrorMessage(statusCode)));
      Toster(t(getErrorMessage(statusCode)), "error");
      return Promise.reject(error);
    }
  }
);


// API methods
export const getMethod = async (url, params) => {
  const response = await apiInstance.get(url, { params });
  return response.data;
};

export const postMethod = async (url, data) => {
  const response = await apiInstance.post(url, data);
  return response.data;
};

export const putMethod = async (url, data) => {
  const response = await apiInstance.put(url, data);
  return response.data;
};

export const deleteMethod = async (url) => {
  const response = await apiInstance.delete(url);
  return response.data;
};
