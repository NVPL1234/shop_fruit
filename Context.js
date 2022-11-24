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

const Context = ({children}) => {
    const [products, dispatch] = useReducer(reducer, data)

    return (
        <MyData.Provider value={{products, dispatch}}>
            {children}
        </MyData.Provider>
    )
}

export default Context