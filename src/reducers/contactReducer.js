import {
  GET_CONTACT,
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT
} from "../actions/types";

const initalState = {
  contacts: [],
  contact: {}
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
}
