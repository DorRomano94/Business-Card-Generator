import { CHECK_AUTH_FAILD, CHECK_AUTH_REQUEST, CHECK_AUTH_SUCCESS, CREATE_NEW_USER_FAILD, CREATE_NEW_USER_REQUEST, CREATE_NEW_USER_SUCCESS, LOGIN_USER_FAILD, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGUOT_USER } from "../types";

const userReducer = (state = { isLogged: false }, action) => {
    switch (action.type) {
        case CREATE_NEW_USER_REQUEST:
            return {
                ...state,
                userRegisteration: action.payload
            }
        case CREATE_NEW_USER_SUCCESS:
            return {
                ...state,
                userRegisteration: action.payload
            }
        case CREATE_NEW_USER_FAILD:
            return {
                ...state,
                userRegisteration: action.payload
            }
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }
        case LOGIN_USER_FAILD:
            return {
                ...state,
                user: action.payload
            }
        case LOGUOT_USER: {
            return {
                ...state,
                isLogged: false,
                user: {}
            }
        }
        case CHECK_AUTH_REQUEST: {
            return {
                ...state,
                isLogged: false,
                user: {}
            }
        }
        case CHECK_AUTH_SUCCESS: {
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }
        }
        case CHECK_AUTH_FAILD: {
            return {
                ...state,
                isLogged: false,
                user: action.payload
            }
        }
        default:
            return state
    }
}

export { userReducer };