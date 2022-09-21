import { apis } from "../../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const ADDCART = "cart/ADDCART";
const GETCART = "cart/GETCART";
const GETCARTITEM = "cart/GETCARTITEM";
const MODIFYCARTITEM = "cart/MODIFYCARTITEM";
const DELETEITEM = "cart/DELETEITEM";

const initialState = {
    cartList: [],
}

// Action Creators
const addCart = createAction(ADDCART, (cartItem) => ({ cartItem }));
const getCart = createAction(GETCART, (cartItem) => ({ cartItem }));
const getCartItem = createAction(GETCARTITEM, (cartItem) => ({ cartItem }));
const modifyCart = createAction(MODIFYCARTITEM, (cartItem) => ({ cartItem }));
const deleteItem = createAction(DELETEITEM, (cartItemId) => ({ cartItemId }));

export const addCartDB = (data) => {
    console.log(data)
    return async function (dispatch) {
        await apis.addCart(data)
            .then((res) => {
                console.log("장바구니데이터", res)
                dispatch(addCart(res.data))
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
                dispatch(getCartItem(res.data))
            })
            .catch((error) => {
                console.log("장바구니아이템에러", error)
            })
    }
}

// 수량 변경
export const modifyCartDB = (cartItemId, cartItem) => {
    console.log("수량아이디:", cartItemId, "수량:", cartItem)
    return async function (dispatch) {
        await apis.modifyQuantity(cartItemId, cartItem)
            .then((res) => {
                console.log("수량변경", res)
                dispatch(modifyCart(res.data))
            })
            .catch((error) => {
                console.log("수량변경에러", error)
            })
    }
}

// 장바구니 아이템 개별 삭제
export const deleteCartItemDB = (cartItemId) => {
    return async function (dispatch) {
        await apis.deleteItem(cartItemId)
            .then((res) => {
                console.log("개별삭제", res)
                dispatch(deleteItem(cartItemId))
            })
            .catch((error) => {
                console.log("개별삭제 에러", error)
            })
    }
}






export default handleActions(
    {
        [GETCART]: (state, action) =>
            produce(state, (draft) => {
                console.log("장바구니", state)
                draft.cartList = action.payload.cartItem
            }),
        [GETCARTITEM]: (state, action) =>
            produce(state, (draft) => {
                draft.cartList = action.payload.cartItem
            }),
        [ADDCART]: (state, action) =>
            produce(state, (draft) => {
                draft.cartList = action.payload.cartList
            }),
        [MODIFYCARTITEM]: (state, action) =>
            produce(state, (draft) => {
                const idx = state.cartList.findIndex((c) => c.product_id === action.payload.cartItem.product_id)
                draft.cartList[idx].quantity = action.payload.cartItem.quantity
                draft.cartList[idx].is_active = action.payload.cartItem.is_active
            }),
        [DELETEITEM]: (state, action) =>
            produce(state, (draft) => {
                draft.cartList = draft.cartList.filter((item) =>
                    item.cartItemId !== action.payload.cartItemId
                )
            })
    },
    initialState
)