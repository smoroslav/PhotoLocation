import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "./actions";

// eslint-disable-next-line
export const useAppActions = () => {
  const dispatch = useDispatch();

  const createActions = () => bindActionCreators(actionCreator, dispatch);

  return useMemo(createActions, [dispatch]);
};

export default useAppActions;
