import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_CATEGORY_FAIL,
  GET_PRODUCT_CATEGORY_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_RESET,
  GET_PRODUCT_DETAIL_SUCCESS,
} from "../actionTypes";

const initState = {
  products: [],
};

const detailinitState = {
  product: {},
};

const categoryInit = {
  categoriesedProd: localStorage.getItem("categorywise-product")
  ? JSON.parse(localStorage.getItem("categorywise-product"))
  : [],
};
export const getProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailReducer = (state = detailinitState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case GET_PRODUCT_DETAIL_RESET:
      return detailinitState;
    default:
      return state;
  }
};

export const getProductByCategoryReducer = (state = categoryInit, action) => {
  switch (action.type) {
    case GET_PRODUCT_CATEGORY_SUCCESS:
      return { categoriesedProd: action.payload, error:null };
    case GET_PRODUCT_CATEGORY_FAIL:
      return { categoriesedProd: [], error:action.payload };
    default:
      return state;
  }
};
