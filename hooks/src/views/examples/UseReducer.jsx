import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer} from '../../store'
import { number_any, login } from '../../store/actions'

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
                onClick={() => login(dispatch)}
                >
                    Login
                </button>
                <button className="btn"
                onClick={() => number_any(dispatch)}
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
