export const ADD_ORDER = 'ADD_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'


export const add_order = (obj) => ({
    type: ADD_ORDER,
    obj
})

export const delete_order = (obj, id) => ({
    type: DELETE_ORDER,
    obj,
    id
})
