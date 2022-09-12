import { apis } from "../../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const GETPRODUCT = "product/GETPRODUCT";
const GETONEPRODUCT = "product/GETONEPRODUCT";

const initialState = {
    products: [],
    productOne: []
}

//Action Creators
const getProduct = createAction(GETPRODUCT, (products) => ({ products }))
const getOneProduct = createAction(GETONEPRODUCT, (productOne) => ({ productOne }))

export const getProductDB = () => {
    return async function (dispatch) {
        await apis.getProduct()
            .then((res) => {
                console.log("상품", res.data.results)
                dispatch(getProduct(res.data.results))
            })
            .catch((error) => {
                console.log("상품에러", error)
            })
    }
}

// 게시물 하나 불러오기
export const getOneProductDB = (productId) => {
    return async function (dispatch) {
        await apis.getOneProduct(productId)
            .then((res) => {
                console.log("상품하나", res.data)
                dispatch(getOneProduct(res.data))
            })
            .catch((error) => {
                console.log("상품하나", error)
            })
    }
}

export default handleActions(
    {
        [GETPRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.products = action.payload.products
            }),
        [GETONEPRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.productOne = action.payload.productOne
            })
    },
    initialState
)