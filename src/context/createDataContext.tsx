import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();
    
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);
        // actions === { addBlogPost: (dispatch) => { return () => {} }}
        const boundActions = {};
        for (let key in actions) {
            // key === 'addBlogPost', loop through the functions and call them with dispatch
            boundActions[key] = actions[key](dispatch)
        }
        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }
    return { Context, Provider };
}
