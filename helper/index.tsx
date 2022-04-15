import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes } from "../services/data-types";

interface callApiResponseTypes {
  error: boolean;
  message: string;
  data: any;
}

export const checkResponseStatus = (
  response: AxiosResponse
): callApiResponseTypes => {
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

export const getCookieToken = (
  decode: boolean = false
): String | JWTPayloadTypes | false => {
  const token64 = Cookies.get("token");
  if (token64) {
    const token = atob(token64);
    if (decode) return jwtDecode(token) as JWTPayloadTypes;
    return token;
  }
  return false;
};

export const onImageErr = (
  currentTarget: EventTarget & HTMLImageElement,
  image: "profile" | "game" = "profile"
): void => {
  currentTarget.onerror = null;
  currentTarget.src =
    image == "profile" ? "/img/default-profile.png" : "/img/default-game.png";
};
