import { callAPI } from "../config/api";
import { LoginTypes, PlayerTypes } from "./data-types";

export const setSignUp = async (payload: PlayerTypes) => {
  return callAPI({
    url: `/auth/signup`,
    method: "POST",
    data: payload,
  });
};

export const signIn = async (payload: LoginTypes) => {
  return callAPI({
    url: `/auth/signin`,
    method: "POST",
    data: payload,
  });
};
