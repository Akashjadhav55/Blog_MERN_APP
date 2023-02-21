import * as types from "./actionType.js"

export const isAuthHandler = (authFlag) => {
    return{
        type: types.isAuth,
        payload: authFlag
    }
}

export const saveUser  =  (userData) => {
    return{
        type:types.Save_User,
        payload: userData,
    }
}