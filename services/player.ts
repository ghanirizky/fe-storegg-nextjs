import { CheckOutPayloadTypes } from "./data-types";
import { callAPI } from "../config/api";

export const getFeaturedGame = async (): Promise<any> => {
  return callAPI({
    url: `/players/landingpage`,
    method: "GET",
  });
};

export const getVoucherDetail = async (id: string) => {
  return callAPI({
    url: `/players/${id}/detail`,
    method: "GET",
  });
};

export const getGameCategory = async () => {
  return callAPI({
    url: `/players/category`,
    method: "GET",
  });
};

export const checkout = async (payload: CheckOutPayloadTypes) => {
  return callAPI({
    url: `/players/checkout`,
    method: "POST",
    data: payload,
    authToken: true,
  });
};
