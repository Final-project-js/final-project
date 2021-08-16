import { ADD_USER, LOGIN_USER } from "./action";


const local = JSON.parse(localStorage.getItem('users'))

const initialState = {
	localUsers: local ? local.localUsers : [],
	currentUser: local
		? local.currentUser
		: {
				lastName: '',
				firstName: '',
				userEmail: '',
				userPassword: '',
				id: '',
				photo: '',
		  },
	succes: false,
}



export const toLog = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			let isLogin = state.localUsers.findIndex(
				(el) => el.userEmail === action.user.userEmail,
			)
			if (isLogin === -1) {
				return {
					...state,
					localUsers: [...state.localUsers, action.user],
					currentUser: action.user,
				}
			} else {
				return state
			}

		case LOGIN_USER:
			let getUser = state.localUsers.find(
				(el) =>
					el.userEmail === action.obj.inEmail &&
					el.userPassword === action.obj.inPassword,
			)
			if (getUser) {
				return {
					...state,
					currentUser: getUser,
					succes: true,
				}
			} else {
				return state
			}

		default:
			return state
	}
}