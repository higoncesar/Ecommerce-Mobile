export const Types = {
  LOAD_REQUEST: 'products/LOAD_REQUEST',
  LOAD_SUCCESS: 'products/LOAD_SUCCESS',
  LOAD_FAILURE: 'products/LOAD_FAILURE',
  SET_CURRENT: 'products/SET_CURRENT',
};

const INITIAL_STATE = {
  data: [],
  current: null,
  loading: false,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };

    case Types.SET_CURRENT:
      return { ...state, current: action.payload.product };

    default:
      return state;
  }
}

export const Creators = {
  loadProductsRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),

  loadProductsSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data },
  }),

  loadProductsFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),

  setProductCurrent: product => ({
    type: Types.SET_CURRENT,
    payload: { product },
  }),
};
