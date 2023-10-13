import axios from "axios";
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_CATEGORY_FAIL,
  GET_PRODUCT_CATEGORY_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
} from "../actionTypes";
const URL = "http://localhost:8001";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAIL_REQUEST });
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCT_DETAIL_FAIL, payload: err.message });
  }
};

export const getProductByCategory = (category) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/category?category=${category}`);
    dispatch({ type: GET_PRODUCT_CATEGORY_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCT_CATEGORY_FAIL, payload: err.message });
  }
};
