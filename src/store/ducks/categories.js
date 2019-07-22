export const Types = {
  LOAD_REQUEST: 'categories/LOAD_REQUEST',
  LOAD_SUCCESS: 'categories/LOAD_SUCCESS',
  LOAD_FAILURE: 'categories/LOAD_FAILURE',
  CHANGE_CURRENT: 'categories/CHANGE_CURRENT',
};

const INITIAL_STATE = {
  data: [],
  current: null,
  loading: false,
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };

    case Types.LOAD_SUCCESS: {
      const { data } = action.payload;

      let current = null;

      if (data.length > 0) {
        current = data[0];
      }

      return {
        ...state,
        data,
        current,
        loading: false,
      };
    }

    case Types.CHANGE_CURRENT:
      return { ...state, current: action.payload.category };

    default:
      return state;
  }
}

export const Creators = {
  loadCategoriesRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),

  loadCategoriesSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data },
  }),

  loadCategoriesFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),

  changeCategoryCurrent: category => ({
    type: Types.CHANGE_CURRENT,
    payload: { category },
  }),
};
