import { GET_PRODUCTS_SUCCESS } from "./actions";

const myFirstReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.products }
        default:
            return state;
    }
}

export default myFirstReducer;