import {
  GET_CONTACT,
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT
} from "./types";
import axios from "axios";

export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  await axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};

export const addContact = contact => async dispatch => {
  await axios.post("https://jsonplaceholder.typicode.com/users", contact);
  dispatch({
    type: ADD_CONTACT,
    payload: contact
  });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const editContact = (id, contact) => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
