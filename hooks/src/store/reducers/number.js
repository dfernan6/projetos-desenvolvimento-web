export function numberReducer(state, action) {
    switch(action.type) {
        case 'number_any':
            return {...state, number: state.number + action.anyNumber}
        case 'multiply_7':
            return {...state, number: state.number * 7}
        case 'divide_25':
            return {...state, number: state.number / 25}
        default:
            return state
    }
}
