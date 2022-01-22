import { user } from "./user.js";

const reduc = (store = user, action) => {
  let get = { ...store };
  switch (action.type) {
    case "SEARCH_CATS":
      get.search = action.value;
      break;
    case "LOAD_MORE":
      get.search = [...get.search, ...action.value];
      break;
    case "Categories":
      get.menu = action.value;
      break;

    default:
      break;
  }
  return get;
};
export default reduc;
