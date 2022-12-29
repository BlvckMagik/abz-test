export interface IUser {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}

export interface IPositions {
  id: number;
  name: string;
}

export interface IUsersParams {
  [key: string]: number;
}
