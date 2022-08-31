import { apis } from "../../shared/api";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const GETPRODUCT = "product/GETPRODUCT";

const initialState = {
    products: []
}

//Action Creators
const getProduct = createAction(GETPRODUCT, (productList) => ({ productList }))

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

export default handleActions(
    {
        [GETPRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.products = action.payload.productList
            }),
    },
    initialState
)