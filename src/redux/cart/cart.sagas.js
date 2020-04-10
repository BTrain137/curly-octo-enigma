import { takeLatest, put, all, call } from "redux-saga/effects";

import CartActionTypes from "./cart.types";
import UserActionTypes from "../user/user.types";

import { clearCart, emptyCart } from "../cart/cart.actions";

export function* emptyTheCart() {
  yield put(emptyCart());
}

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onClearCart() {
  yield takeLatest(CartActionTypes.EMPTY_CART, emptyTheCart);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess), 
    call(onClearCart),
  ]);
}
