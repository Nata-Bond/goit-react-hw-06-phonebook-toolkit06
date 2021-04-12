// import types from "./contactsTypes";
import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

const addContact = createAction("contacts/Add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

// const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

const deleteContact = createAction("contacts/delete");

// const changeFilter = (filterValue) => ({
//   type: types.CHANGE_FILTER,
//   payload: filterValue,
// });

const changeFilter = createAction("contacts/changeFilter");

export { addContact, deleteContact, changeFilter };
