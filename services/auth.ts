import { callAPI } from "../config/api";
import { LoginTypes, PlayerTypes } from "./data-types";

const URL_API = `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_API_VER}`;

export const setSignUp = async (payload: PlayerTypes) => {
  return callAPI({
    url: `${URL_API}/auth/signup`,
    method: "POST",
    data: payload,
  });
};

export const signIn = async (payload: LoginTypes) => {
  return callAPI({
    url: `${URL_API}/auth/signin`,
    method: "POST",
    data: payload,
  });
};
