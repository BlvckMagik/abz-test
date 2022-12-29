import {
  USERS_RECEIVED,
  USERS_FETCHING,
  MORE_USERS_RECEIVED,
} from "./users.actions";

export interface IUserData {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}

export interface IStore {
  usersData: IUserData[];
  totalPages: number;
  isDataFetching: boolean;
}

const initData: IStore = {
  usersData: [],
  totalPages: 0,
  isDataFetching: true,
};

const usersReducer = (state: IStore = initData, action: any) => {
  switch (action.type) {
    case USERS_FETCHING:
      return {
        ...state,
        isDataFetching: true,
      };

    case USERS_RECEIVED:
      return {
        ...state,
        usersData: action.payload.users,
        totalPages: action.payload.total_pages,
        isDataFetching: false,
      };

    case MORE_USERS_RECEIVED:
      return {
        ...state,
        usersData: [...state.usersData, ...action.payload.users],
        totalPages: action.payload.total_pages,
        isDataFetching: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
