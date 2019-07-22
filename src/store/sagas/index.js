import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '~/store/ducks/categories';
import { Types as CartTypes } from '~/store/ducks/cart';
import { loadCategories, changeCategory } from './categories';
import { calculateTotal, addProduct } from './cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.LOAD_REQUEST, loadCategories),
    takeLatest(CategoriesTypes.CHANGE_CURRENT, changeCategory),
    takeLatest(
      [CartTypes.ADD_PRODUCT, CartTypes.REMOVE_PRODUCT, CartTypes.CHANGE_QUANTITY],
      calculateTotal,
    ),
  ]);
}
