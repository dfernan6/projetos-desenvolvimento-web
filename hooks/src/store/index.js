import { number_any } from './actions/number'
import { reducer } from './reducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

export {
    reducer,
    initialState,
    number_any
}