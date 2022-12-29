import axios from "axios";
import { getItem } from "./utils";

const baseURL = process.env.REACT_APP_API_URL;

export const defaultUsersCount = 6;

export const imageSize = 5242880;

export interface Params {
  count?: number;
  page?: number;
}

export const axiosInstance = axios.create({
  baseURL,
  headers: { Token: getItem("token") },
});

export const URL_USERS = {
  GET_ALL: "/users",
  GET_BY_ID: "/users",
  CREATE: "/users",
  UPDATE: "/users",
  POSITIONS: "/positions",
  TOKEN: "/token",
};

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

export const PHONE_REGEX =
  /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
