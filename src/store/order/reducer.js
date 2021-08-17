import { ADD_ORDER, DELETE_ORDER, DELETE_ORDER1 } from "./action.js";

const localStorages = JSON.parse(localStorage.getItem("product"));

const initialState = {
  orders: [],
  totalCount: 0,
  totalPrice: 0,
};

export const orderReducer = (state = initialState || localStorages , action) => {
  console.log(action)
  switch (action.type) {
    case ADD_ORDER:
      let arr = [...state.orders];
      let is_ch = state.orders.findIndex((item) => {
        return item.title === action.obj.title;
      });
      // console.log(is_ch);
      if (is_ch === -1) {
        return {
          ...state,
          orders: [...state.orders, action.obj],
          totalCount: state.totalCount + 1,
          totalPrice: state.totalPrice + action.obj.price,
          localStorages: state.localStorages + action.obj.price
        };
      } else {
        return {
          orders: state.orders.map((el, id) => {
            return arr[is_ch].title === el.title
              ? { ...el, count: el.count + 1, price: el.price + el.num }
              : el;
          }),
          totalCount: state.totalCount + 1,
          totalPrice: state.totalPrice + action.obj.price,
        };
      }

    case DELETE_ORDER:
      let arr1 = [...state.orders];
      let is_ch1 = state.orders.findIndex((item) => {
        return item.title === action.obj.title;
      });
      if (action.obj.count !== 1  ) {
        return {
          ...state,
          orders: state.orders.map((el, id) => {
            return arr1[is_ch1].title === el.title
              ? { ...el, count: el.count - 1, price: el.price + el.num }
              : el;
          }),
          totalCount: state.totalCount - 1,
          totalPrice: state.totalPrice - action.obj.num,
          localStorages: state.localStorages - action.obj.num,
        };
      } else {
        return {
          ...state,
          orders: state.orders.filter((_, id) => {
            return id !== action.id;
          }),
          totalCount: state.totalCount - 1,
          totalPrice: state.totalPrice - action.obj.num,
        };
      }

    case DELETE_ORDER1:
      return initialState;
    default:
      return state;
  }
};
