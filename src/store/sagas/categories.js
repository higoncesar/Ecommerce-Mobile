import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as CategoriesActions } from '~/store/ducks/categories';
import { Creators as ProductsActions } from '~/store/ducks/products';

export function* loadCategories() {
  try {
    yield put(ProductsActions.loadProductsRequest());
    const categories = yield call(api.get, '/categories');
    yield put(CategoriesActions.loadCategoriesSuccess(categories.data));

    if (categories.data.length > 0) {
      const productsCurrentCategory = yield call(
        api.get,
        `/category_products?id=${categories.data[0].id}`,
      );
      const data = productsCurrentCategory.data[0].products;
      yield put(ProductsActions.loadProductsSuccess(data));
    }
  } catch (error) {}
}

export function* changeCategory(action) {
  const { category } = action.payload;
  try {
    yield put(ProductsActions.loadProductsRequest());
    const productsCurrentCategory = yield call(api.get, `/category_products?id=${category.id}`);
    const data = productsCurrentCategory.data[0].products;
    yield put(ProductsActions.loadProductsSuccess(data));
  } catch (error) {}
}
