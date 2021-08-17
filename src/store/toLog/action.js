export const ADD_USER = 'ADD_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const ADD_ORDER = "ADD_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const DELETE_ORDER1 = "DELETE_ORDER1";

export const add_user = (user) => ({
    type: ADD_USER,
    user
})


export const login_user = (obj) => ({
    type: LOGIN_USER,
    obj
})


export const add_order = (obj) => ({
  type: ADD_ORDER,
  obj,
});

export const delete_order = (obj, id) => ({
  type: DELETE_ORDER,
  obj,
  id,
});

export const delete_order1 = (obj, id) => ({
  type: DELETE_ORDER1,
  obj,
  id,
});
