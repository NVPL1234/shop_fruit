<<<<<<< HEAD
import {useReducer, createContext} from 'react'
import data from './data'

export const MyData = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET':
            return state = action.products
        case 'ADD':
            return [...state, action.product]
        case 'DELETE':
            return state = action.products 
        default:
            break;
    }
}  
=======
import {createContext, useState} from 'react';
export const MyData = createContext();
>>>>>>> 0bd0287d9b043b4df20776c6755409efd93b09a2

const Context = ({children}) => {
    const [fruits, setFruits] = useState(require("./fruits"));
    const [carts, setCarts] = useState(require("./carts"));

    return (
        <MyData.Provider value={{ fruits, carts }}>
            {children}
        </MyData.Provider>
    )
}

export default Context