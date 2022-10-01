import { apis } from "../../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const SIGNIN = "user/SIGNIN";

const initialState = {
    user: null,
    is_login: false,
}

// Action Creators
const signInUser = createAction(SIGNIN, (user) => ({ user }));


export const signUpDB = (data) => {
    console.log(data)
    return async function (dispatch) {
        await apis.signUp(data)
            .then((res) => {
                console.log(res)
                window.location.assign("/login")
            })
            .catch((error) => {
                console.log(error)
                window.alert(error)
                window.alert(error.response.data.errorMessage)
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
