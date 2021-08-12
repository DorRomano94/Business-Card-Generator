import { CREATE_NEW_CARD_FAILD, CREATE_NEW_CARD_REQUEST, CREATE_NEW_CARD_SUCCESS } from "../types";

const cardReducer = (state = {}, action) => {

    switch (action.type) {
        case CREATE_NEW_CARD_REQUEST:
            return {
                ...state,
                createCard: action.payload
            }
        case CREATE_NEW_CARD_SUCCESS:
            return {
                ...state,
                createCard: action.payload
            }
        case CREATE_NEW_CARD_FAILD:
            return {
                ...state,
                createCard: action.payload
            }
        default:
            return state
    }


}

export { cardReducer };