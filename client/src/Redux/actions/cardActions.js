import { CREATE_NEW_CARD_FAILD, CREATE_NEW_CARD_REQUEST, CREATE_NEW_CARD_SUCCESS } from "../types"

import { baseUrl } from '../../utils';

export const createCard = (card) => (dispatch) => {
    dispatch(
        {
            type: CREATE_NEW_CARD_REQUEST,
            payload: 'Loading',
        }
    )
    fetch(`${baseUrl}/cards/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify(card),
    }).then((res) => res.json())
        .then((data) => {
            if (data.id) {
                dispatch(
                    {
                        type: CREATE_NEW_CARD_SUCCESS,
                        payload: data,
                    }
                )
            } else {
                dispatch({
                    type: CREATE_NEW_CARD_FAILD,
                    payload: data,
                })
            }
        })

}