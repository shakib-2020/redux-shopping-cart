import { cartActions } from "./cart-slice";
import uiSlice from "./ui-slice";

export const fatchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-shopping-cart-app-aa608-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      // send state as error found
      dispatch(
        uiSlice.actions.showNotification({
          open: true,
          message: "Sending request failed! Please try again.",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // send state as sanding Request
    dispatch(
      uiSlice.actions.showNotification({
        open: true,
        message: "Sending Request!",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-shopping-cart-app-aa608-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      // eslint-disable-next-line no-unused-vars
      const data = await res.json();
      // send state as Request Succesfull
      dispatch(
        uiSlice.actions.showNotification({
          open: true,
          message: "Send request to Database succesfully.",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (error) {
      // send state as error found
      dispatch(
        uiSlice.actions.showNotification({
          open: true,
          message: "Sending request failed! Please try again.",
          type: "error",
        })
      );
    }
  };
};
