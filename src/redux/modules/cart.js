import { apis } from "../../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const ADDCART = "cart/ADDCART";

const initialState = {
    cartList: [],
}

// Action Creators
const addCart = createAction(ADDCART, (cartItem) => ({ cartItem }));

export const addCartDB = (data) => {
    console.log(data)
    return async function (dispatch) {
        await apis.addCart(data)
            .then((res) => {
                console.log("장바구니데이터", res)
            })
            .catch((error) => {
                console.log("장바구니에러", error)
            })
    }
}



export default handleActions(
    {

    },
    initialState
)