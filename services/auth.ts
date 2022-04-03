import axios from "axios";
import { checkResponseStatus } from "../helper";

const URL_API = `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_API_VER}`;

export const setSignUp = async (payload: any) => {
  const URL = `${URL_API}/auth/signup`;
  const response = await axios.post(URL, payload).catch((err) => err.response);
  return checkResponseStatus(response);
};

export const signIn = async (payload: any) => {
  const URL = `${URL_API}/auth/signin`;
  const response = await axios.post(URL, payload).catch((err) => err.response);
  return checkResponseStatus(response);
};
