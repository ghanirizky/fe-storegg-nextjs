import axios from "axios";

const URL_API = `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_API_VER}`

export const setSignUp = async (payload : any) => {
  const URL = `${URL_API}/auth/signup`;

  const response = await axios.post(URL, payload);
  return response.data.data;
};