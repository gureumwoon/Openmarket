import { apis } from "../../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const ADDCART = "cart/ADDCART";
const GETCART = "cart/GETCART";

const initialState = {
    cartList: [],
}

// Action Creators
const addCart = createAction(ADDCART, (cartItem) => ({ cartItem }));
const getCart = createAction(GETCART, (cartItem) => ({ cartItem }))

export const addCartDB = (data) => {
    console.log(data)
    return async function (dispatch) {
        await apis.addCart(data)
            .then((res) => {
                console.log("장바구니데이터", res)
                dispatch(addCart(data))
            })
            .catch((error) => {
                console.log("장바구니에러", error)
            })
    }
}

// export const getItemCartDB = () => {
//     return async function (dispatch) {
//         await apis.getItemCart()
//             .then((res) => {
//                 console.log("아이템", res)
//             })
//             .catch((error) => {
//                 console.log("아이템에러", error)
//             })
//     }
// }

export const getCartDB = () => {
    return async function (dispatch) {
        await apis.getCart()
            .then((res) => {
                console.log("장바구니아이템", res.data)
                dispatch(getCart(res.data.results))
            })
            .catch((error) => {
                console.log("장바구니아이템에러", error)
            })
    }
}

export const getItemtCartDB = () => {
    return async function (dispatch) {
        await apis.getItemCart()
            .then((res) => {
                console.log("장바구니아이템", res.data)
                dispatch(getCart(res.data.results))
            })
            .catch((error) => {
                console.log("장바구니아이템에러", error)
            })
    }
}






export default handleActions(
    {
        [GETCART]: (state, action) =>
            produce(state, (draft) => {
                draft.cartList = action.payload.cartItem
            }),
        [ADDCART]: (state, action) =>
            produce(state, (draft) => {
                draft.cartList = action.payload.cartList
            })
    },
    initialState
)