/**
    * @description      : 
    * @author           : yaelm
    * @group            : 
    * @created          : 20/06/2021 - 20:49:55
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/06/2021
    * - Author          : yaelm
    * - Modification    : 
**/
import { ACTION_TYPES } from "../action/calculation";
const initialState = {
    list: []
}

export const calculation = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x.id == action.payload.id ? action.payload : x)
            }
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id != action.payload)
            }

        default:
            return state
    }
}