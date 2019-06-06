import {AUTH_ADD_USER} from './type'
import {AUTH_UPDATE_USER} from './type'

export const authAddUser = (id, Email, Password, isLogged) => {
    return {
        type: AUTH_ADD_USER,
        payload: {id, Email, Password, isLogged}
    }
}
export const authUpdateUser = (id, Email, Password, isLogged) => {
    return {
        type: AUTH_UPDATE_USER,
        payload: {id, Email, Password, isLogged}
    }
}
