import { Dispatch } from "redux";
import { IUsersParams } from "../constants/types";
import { getAllUsers } from "../gateway/userGateway";
import { IUserData } from "./users.reducer";

export const MORE_USERS_RECEIVED = "MORE_USERS_RECEIVED";
export const USERS_RECEIVED = "USERS_RECEIVED";
export const USERS_FETCHING = "USERS_FETCHING";

export const usersReceived = (usersData: IUserData[]) => {
  return {
    type: USERS_RECEIVED,
    payload: usersData,
  };
};

export const moreUsersReceived = (usersData: IUserData[]) => {
  return {
    type: MORE_USERS_RECEIVED,
    payload: usersData,
  };
};

export const usersFetching = () => {
  return {
    type: USERS_FETCHING,
  };
};

export const getUsers = (params: IUsersParams) => {
  return function (dispatch: Dispatch<any>) {
    dispatch(usersFetching());
    getAllUsers(params)
      .then((response) => dispatch(usersReceived(response.data)))
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getMoreUsers = (params: IUsersParams) => {
  return function (dispatch: Dispatch<any>) {
    dispatch(usersFetching());
    getAllUsers(params)
      .then((response) => dispatch(moreUsersReceived(response.data)))
      .catch((err) => {
        throw new Error(err);
      });
  };
};
