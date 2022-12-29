import { axiosInstance, URL_USERS } from "../constants/constants";
import { IUsersParams } from "../constants/types";

export const getToken = async () => {
  return await axiosInstance.get(`${URL_USERS.TOKEN}`);
};

export const getAllUsers = async (params: IUsersParams) => {
  return await axiosInstance.get(`${URL_USERS.GET_ALL}`, {
    params,
  });
};

export const createUser = async (body: object) => {
  return await axiosInstance.post(`${URL_USERS.CREATE}`, body);
};

export const getPositions = async () => {
  return await axiosInstance.get(`${URL_USERS.POSITIONS}`);
};

// url/api/weather?city=kyiv&lat
