/* eslint-disable no-unused-vars */
import { metaphotoSlice } from "./slice";

const { actions } = metaphotoSlice;

export const actionCreator = {
  setItems: (value) => (dispatch, getState) => {
    dispatch(actions.setItems(value));
  },
  setItem: (value) => (dispatch, getState) => {
    dispatch(actions.setItem(value));
  },
  setDeleteItem: (value) => (dispatch, getState) => {
    dispatch(actions.setDeleteItem(value));
  },
  setDeleteAll: (value) => (dispatch, getState) => {
    dispatch(actions.setDeleteAll(value));
  },
  setSelectedItemId: (value) => (dispatch, getState) => {
    dispatch(actions.setSelectedItemId(value));
  },
  setHoveredItemId: (value) => (dispatch, getState) => {
    dispatch(actions.setHoveredItemId(value));
  },
  updateItem: (value) => (dispatch, getState) => {
    dispatch(actions.updateItem(value));
  },
};

export default actionCreator;
