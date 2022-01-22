import axios from "axios";

export const categori = (error) => {
  return { type: "Categories", value: error };
};

export const search = (text) => {
  return function (dispatch) {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids${text}`
      )
      .then((r) => {
        console.log(r.data);
        dispatch({ type: "SEARCH_CATS", value: r.data });
      })
      .catch((e) => console.log(e));
  };
};

export const LoadMore = (text) => {
  return function (dispatch) {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids${text}`
      )
      .then((r) => {
        console.log(r.data);
        dispatch({ type: "LOAD_MORE", value: r.data });
      })
      .catch((e) => console.log(e));
  };
};
export const menuCat = () => {
  return function (dispatch) {
    axios
      .get(`https://api.thecatapi.com/v1/categories`)
      .then((r) => {
        console.log(r.data);
        dispatch(categori(r.data));
      })
      .catch((e) => console.log(e));
  };
};
