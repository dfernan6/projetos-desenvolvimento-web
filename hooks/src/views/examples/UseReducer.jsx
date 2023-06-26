import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

function reducer(state, action) {
    switch(action.type) {
        case 'number_any':
            return {...state, number: state.number + action.anyNumber}
        case 'login':
            return {...state, user: { name: action.payload} }
        case 'multiply_7':
            return {...state, number: state.number * 7}
        case 'divide_25':
            return {...state, number: state.number / 25}
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
   
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
        <div className="center">
            {state.user ?
            <span className="text">
            {state.user.name}
            </span> : <span className="text">
                Sem usuário
            </span>
            }
            <span className="text">
                {parseInt(state.number)}
            </span>
            <div>
                <button className="btn"
                onClick={() => dispatch({type: 'login', payload: 'Maria' })}
                >
                    Login
                </button>
                <button className="btn"
                onClick={() => dispatch({type: 'number_any', anyNumber: 3 })}
                >+{3}</button>
                <button className="btn"
                onClick={() => dispatch({type: 'multiply_7' })}
                >*7</button>
                <button className="btn"
                onClick={() => dispatch({type: 'divide_25' })}
                >/25</button>
            </div>
        </div>
        </div>
    )
}

export default UseReducer
