import { apis } from "../../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const SIGNUP = "user/SIGNUP";

const initialState = {
    user: null,
    is_login: false
}

// Action Creators
const signUpUser = createAction(SIGNUP, (user) => ({ user }))

export const signUpDB = (data) => {
    console.log(data)
    return async function (dispatch, { history }) {
        apis.signUp(data)
            .then((res) => {
                window.alert(res.data.message)
            })
            .catch((error) => {
                console.log(error)
                window.alert(error)
                window.alert(error.response.data.errorMessage)
            })
    }
}

export default handleActions(
    {

    },
    initialState
)
