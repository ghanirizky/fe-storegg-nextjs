import { callAPI } from "../config/api";

export const dashboard = async () => {
  return callAPI({
    url: `/players/dashboard`,
    method: "GET",
    authToken: true,
  });
};

export const transHistory = async (tab: string) => {
  return callAPI({
    url: `/players/history?status=${tab}`,
    method: "GET",
    authToken: true,
  });
};

//Server side call
export const transHistoryDetail = async (id: string, token: string) => {
  return callAPI({
    url: `/players/history/${id}/detail`,
    method: "GET",
    serverToken: token,
  });
};
