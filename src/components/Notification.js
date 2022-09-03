import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Notification = ({ type, message }) => {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  const handleOnclose = () => {
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };
  return (
    <>
      {notification.open && (
        <Alert onClose={handleOnclose} severity={type}>
          {message}
        </Alert>
      )}
    </>
  );
};

export default Notification;
