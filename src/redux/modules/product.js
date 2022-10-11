import { apis } from "../../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const GETPRODUCT = "product/GETPRODUCT";
const GETONEPRODUCT = "product/GETONEPRODUCT";
const GETSELLERPRODUCT = "seller/GETSELLERPRODUCT";
const DELETEPRODUCT = "product/DELETEPRODUCT";

const initialState = {
    products: [],
    productOne: [],
    sellerProducts: []
}

//Action Creators
const getProduct = createAction(GETPRODUCT, (products) => ({ products }))
const getOneProduct = createAction(GETONEPRODUCT, (productOne) => ({ productOne }))
const getSellerProduct = createAction(GETSELLERPRODUCT, (products) => ({ products }))
const deleteProduct = createAction(DELETEPRODUCT, (productId) => ({ productId }))

export const getProductDB = () => {
    return async function (dispatch) {
        await apis.getProduct()
            .then((res) => {
                console.log("상품", res.data)
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

// 상품 업로드
export const addProductDB = (product) => {
    return async function (dispatch) {
        await apis.addProduct(product)
            .then((res) => {
                console.log(res)
                window.location.assign(`/detail/${res.data.product_id}`)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

// 판매자 상품 불러오기
export const getSellerProductDB = () => {
    return async function (dispatch) {
        await apis.getSellerProduct()
            .then((res) => {
                console.log(res.data.results)
                dispatch(getSellerProduct(res.data.results))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

// 판매상품 삭제하기
export const deleteProductDB = (productId) => {
    return async function (dispatch) {
        await apis.deleteProduct(productId)
            .then((res) => {
                console.log(res)
                dispatch(deleteProduct(productId))
            })
            .catch((error) => {
                console.log(error)
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
            }),
        [GETSELLERPRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.sellerProducts = action.payload.products
            }),
        [DELETEPRODUCT]: (state, action) =>
            produce(state, (draft) => {
                const idx = state.sellerProducts.findIndex((p) => p.product_id === action.payload.productId)
                draft.sellerProducts = draft.sellerProducts.filter((product) =>
                    product.product_id === action.payload.productId
                )
            })
    },
    initialState
)