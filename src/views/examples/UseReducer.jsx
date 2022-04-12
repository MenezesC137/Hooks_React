import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'numberMulti7':
            return {...state, number: state.number * 7}
        case 'numberDiv25':
            return {...state, number: state.number / 25}
        case 'numberInt':
            return {...state, number : parseInt(state.number)}  
        case 'numberAddN': 
            return {...state, number: action.number}
        case 'login':
            return {...state, user: {name: action.payload } }
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
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>
                }

                <span className="text">{state.number}</span>
                <button className="btn"
                        onClick={() => dispatch({type: 'login', payload: 'Maria'})}>
                        Login
                </button>
                <input
                    type="number"
                    className="input"
                    onChange={(e) => dispatch({type: 'numberAddN', number: e.target.value })}
                    />
                <div>
                <button className="btn"
                        onClick={()=> dispatch({type: 'numberInt'})} >
                        Inteiro
                    </button>
                    <button className="btn"
                        onClick={()=> dispatch({type: 'numberDiv25'})} >
                        /25
                    </button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberMulti7'})}> 
                        * 7
                    </button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberAdd2'})}>
                        +2
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
