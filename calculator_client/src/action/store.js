/**
    * @description      : 
    * @author           : yaelm
    * @group            : 
    * @created          : 20/06/2021 - 18:43:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/06/2021
    * - Author          : yaelm
    * - Modification    : 
**/
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { reducers } from '../reducers'
export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    ))