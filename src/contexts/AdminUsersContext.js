import axios from "axios";
import React, { useReducer } from "react";
import {
  DELETE_USER_API,
  GET_USERS_API,
  REGISTER_NEW_USER,
  RESET_PASSWORD_API,
} from "../helpers/constants";

export const adminUsersContext = React.createContext();

const INIT_STATE = {
  users: null,
  registeringInfo: {
    message: "",
  },
  resetingInfo: {
    message: "",
  },
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_ADDING_MESSAGE":
      return {
        ...state,
        registeringInfo: action.payload,
      };
    case "GET_RESETING_INFO":
      return {
        ...state,
        resetingInfo: action.payload,
      };
    default:
      return state;
  }
};

const AdminUsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getUsers() {
    const { data } = await axios.get(GET_USERS_API);
    console.log(data);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  }

  async function registerUser(newUserData) {
    console.log(newUserData);
    const { data } = await axios.post(REGISTER_NEW_USER, newUserData);
    console.log(data);
    if (data.success) {
      dispatch({
        type: "GET_ADDING_MESSAGE",
        payload: data,
      });
      getUsers();
    } else {
      dispatch({
        type: "GET_ADDING_MESSAGE",
        payload: data,
      });
    }
  }

  async function deleteUser(id) {
    const { data } = await axios.get(`${DELETE_USER_API}?id=${id}`);
    console.log(data);
    getUsers();
  }

  async function resetPassword(updatedData) {
    // updatedData = { //Пример обновленного пароля
    //     id: 44,
    //     newPassword: 'qwertyuu'
    // }

    const { data } = await axios.post(RESET_PASSWORD_API, updatedData);
    dispatch({
      type: "GET_RESETING_INFO",
      payload: data,
    });
    console.log(data);
  }

  function cleanResetInfo() {
    dispatch({
      type: "GET_RESETING_INFO",
      payload: {
        message: "",
      },
    });
  }

  return (
    <adminUsersContext.Provider
      value={{
        users: state.users,
        registeringInfo: state.registeringInfo,
        resetingInfo: state.resetingInfo,
        getUsers,
        registerUser,
        deleteUser,
        resetPassword,
        cleanResetInfo,
      }}
    >
      {children}
    </adminUsersContext.Provider>
  );
};

export default AdminUsersContextProvider;
