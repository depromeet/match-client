import { useSelector, useDispatch } from "react-redux";
import { toggleAlert, setMessage } from "../modules/alert";

export const useAlert = () => {
  const dispatch = useDispatch();
  const { showAlert, alertMessage } = useSelector((state) => state.alert);

  const changeMessage = (message) => dispatch(setMessage({ message }));

  const toggleAlertMessage = () => dispatch(toggleAlert());

  return {
    showAlert,
    alertMessage,
    changeMessage,
    toggleAlertMessage,
  };
};
