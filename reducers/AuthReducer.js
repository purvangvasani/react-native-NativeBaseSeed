import {AUTH_ADD_USER} from '../actions/type'
import {AUTH_UPDATE_USER} from '../actions/type'
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    id: 0,
    isLogged: false,
    Email: '',
    Password: '',
    users: []
}

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case AUTH_ADD_USER:
            console.log('====================================');
            console.log('called');
            console.log('====================================');
            return Object.assign({}, state, {
                users: state.users.concat({
                    id: action.payload.id,
                    Email: action.payload.Email,
                    Password: action.payload.Password,
                    isLogged: action.payload.isLogged
                })
            })
        case AUTH_UPDATE_USER:
            AsyncStorage.removeItem('user')
            return Object.assign({}, state, {
                users: state.users.map((user)=>{console.log(action.payload.id,user.id)
                    if(user.id === action.payload.id) {
                        return {
                            ...user,
                            isLogged: action.payload.isLogged
                        }
                    } else return user
                })
            })
        default:
            return state
    }
}


export default authReducer
