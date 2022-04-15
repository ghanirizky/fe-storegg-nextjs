import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes } from "../services/data-types";

export const checkResponseStatus = (response: AxiosResponse) => {
  if (String(response?.status)[0] !== "2") {
    return {
      error: true,
      message: response.data?.message ?? "Internal server error",
      data: response.data.data,
    };
  }

  return {
    error: false,
    message: "Success",
    data: response.data.data,
  };
};

export const getCookieToken = (decode: boolean = false) => {
  const token64 = Cookies.get("token");
  if (token64) {
    const token = atob(token64);
    if (decode) return jwtDecode(token) as JWTPayloadTypes;
    return token;
  }
  return false;
};
