import { CHECK_AUTH_FAILD, CHECK_AUTH_REQUEST, CHECK_AUTH_SUCCESS, CREATE_NEW_USER_FAILD, CREATE_NEW_USER_REQUEST, CREATE_NEW_USER_SUCCESS, LOGIN_USER_FAILD, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGUOT_USER } from "../types"

import { baseUrl } from '../../utils';

export const registerAction = (user) => (dispatch) => {
    dispatch(
        {
            type: CREATE_NEW_USER_REQUEST,
            payload: 'Loading',
        }
    )
    fetch(`${baseUrl}/users/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify(user),
    }).then((res) => res.json())
        .then((data) => {
            if (data.id) {
                dispatch(
                    {
                        type: CREATE_NEW_USER_SUCCESS,
                        payload: data,
                    }
                )
            } else {
                dispatch({
                    type: CREATE_NEW_USER_FAILD,
                    payload: data,
                })
            }
        })
}
export const LoginAction = (user) => async (dispatch) => {
    dispatch(
        {
            type: LOGIN_USER_REQUEST,
            payload: 'Loading',
        }
    )
    await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify(user),
    }).then((res) => res.json())
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token)
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: data,
                })
            } else {
                dispatch({
                    type: LOGIN_USER_FAILD,
                    payload: data,
                })
            }
        })
}
export const LoguotAction = () => async (dispatch) => {
    localStorage.removeItem('token');
    dispatch(
        {
            type: LOGUOT_USER,
        }
    )
}


export const checkAuth = () => (dispatch) => {
    const token = localStorage.getItem('token')
    if (token) {
        dispatch({
            type: CHECK_AUTH_REQUEST,
            payload: 'Loading',
        })
        fetch(`${baseUrl}/users/checkToken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": token,
                'Accept': 'application/json'
            },
        }).then((res) => res.json())
            .then((data) => {
                if (data.id) {
                    dispatch({
                        type: CHECK_AUTH_SUCCESS,
                        payload: data,
                    })
                } else {
                    dispatch({
                        type: CHECK_AUTH_FAILD,
                        payload: data,
                    })
                }
            })
    } else {
        dispatch({
            type: CHECK_AUTH_FAILD,
            payload: { message: "Token is missing" }
        })
    }
}