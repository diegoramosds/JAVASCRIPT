import { createContext, useReducer } from "react"
import PropTypes from 'prop-types';


export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    //switch
}

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"});

    return (
    <TitleColorContext.Provider value={{...state}}>
        {children}
    </TitleColorContext.Provider>
    )
    
}

TitleColorContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}