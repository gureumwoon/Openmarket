import { apis } from "../../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const SIGNIN = "user/SIGNIN";
const SIGNOUT = "user/SIGNOUT";

const initialState = {
    user: null,
    is_login: false,
}

// Action Creators
const signInUser = createAction(SIGNIN, (user) => ({ user }));
const signOutUser = createAction(SIGNOUT, (user) => ({ user }));


export const signUpDB = (data) => {
    console.log(data)
    return async function (dispatch) {
        await apis.signUp(data)
            .then((res) => {
                console.log(res)
                window.alert("회원가입에 성공했습니다!")
                window.location.assign("/login")
            })
            .catch((error) => {
                console.log(error)
                window.alert(error)
                window.alert(error.response.data.errorMessage)
            })
    }
}

//판매자 로그인
export const sellerSignUpDB = (data) => {
    return async function (dispatch) {
        await apis.sellerSignUp(data)
            .then((res) => {
                console.log(res)
                window.alert("회원가입에 성공했습니다!")
                window.location.assign("/login")
            })
            .catch((error) => {
                console.log(error.response.data)

            })
    }
}

//중복체크
export const dupCheckDB = (data) => {
    return async function (dispatch) {
        apis.dupcheck(data)
            .then((res) => {
                console.log("중복확인", res)
            })
            .catch((error) => {
                console.log("중복확인에러", error)
            })
    }
}

export const signInDB = (data) => {
    console.log(data)
    return async function (dispatch) {
        await apis.signIn(data)
            .then((res) => {
                console.log("로그인정보", res)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("type", res.data.user_type)
                localStorage.setItem("id", res.data.id)
                dispatch(signInUser({ data }))
                window.location.assign("/")
            })
            .catch((error) => {
                window.alert(error.response.data)
            })
    }
}

export const signOutDB = () => {
    return function (dispatch) {
        apis.signOut()
            .then((res) => {
                localStorage.clear()
                window.alert(res.data.detail)
                window.location.assign("/")
            })
    }
}


export default handleActions(
    {
        [SIGNIN]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
    },
    initialState
)
