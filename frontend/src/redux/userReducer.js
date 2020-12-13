import { userAPI } from "../api/api";
// import {updateObjectInArray} from '../utils/object-helpers';

const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    default:
      return state;
  }
};
//Create actions
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

//Thunks
export const requestUsers = () => async (dispach) => {
  const accessToken = localStorage.getItem("token");
  let response = await userAPI.getUsers(accessToken);
  dispach(setUsers(response.data));
};

export default usersReducer;
