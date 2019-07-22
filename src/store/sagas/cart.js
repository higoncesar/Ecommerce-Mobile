import { select, put } from 'redux-saga/effects';
import { Creators as CartActions } from '~/store/ducks/cart';

export function* calculateTotal() {
  const cartProducts = yield select(state => state.cart.products);
  let total = 0;
  cartProducts.forEach((product) => {
    const priceTotalThisProduct = product.quantity * product.price;
    total += priceTotalThisProduct;
  });
  yield put(CartActions.updateTotalCart(total));
}
