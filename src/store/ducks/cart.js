import { showMessage } from 'react-native-flash-message';

export const Types = {
  ADD_PRODUCT: 'cart/ADD_PRODUCT',
  ADD_PRODUCT_REQUEST: 'cart/ADD_PRODUCT_REQUEST',
  REMOVE_PRODUCT: 'cart/REMOVE_PRODUCT',
  UPDATE_TOTAL: 'cart/UPDATE_TOTAL',
  CHANGE_QUANTITY: 'cart/CHANGE_QUANTITY',
};

const INITIAL_STATE = {
  products: [],
  error: null,
  total: 0,
};

export default function Cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT: {
      const repeated = state.products.find(product => action.payload.product.id === product.id);

      if (repeated) {
        showMessage({
          message: 'Este produto já esta no carrinho',
          type: 'danger',
          icon: 'danger',
        });
        return { ...state, error: 'Este produto já esta no carrinho' };
      }

      const { product } = action.payload;
      product.quantity = 1;

      showMessage({
        message: 'Adicionado ao carrinho',
        type: 'success',
        icon: 'success',
      });

      return { ...state, products: [...state.products, product], error: null };
    }

    case Types.REMOVE_PRODUCT: {
      const products = state.products.filter((product) => {
        if (product.id !== action.payload.id) return product;
      });
      return { ...state, products: [...products], error: null };
    }

    case Types.UPDATE_TOTAL:
      return { ...state, total: action.payload.total };

    case Types.CHANGE_QUANTITY: {
      const { products } = state;
      const index = products.findIndex(product => product.id === action.payload.id);
      products[index].quantity = action.payload.quantity;
      return { ...state, products, error: null };
    }

    default:
      return state;
  }
}

export const Creators = {
  addProductToCart: product => ({
    type: Types.ADD_PRODUCT,
    payload: { product },
  }),

  removeProductToCart: id => ({
    type: Types.REMOVE_PRODUCT,
    payload: { id },
  }),

  updateTotalCart: total => ({
    type: Types.UPDATE_TOTAL,
    payload: { total },
  }),

  changeQuantityCart: (id, quantity) => ({
    type: Types.CHANGE_QUANTITY,
    payload: { id, quantity },
  }),
};
