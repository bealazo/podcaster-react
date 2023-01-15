import React from 'react';
import {createContext, useReducer} from "react";
import StoreReducer, {initialStore} from "./StoreReducer";

const StoreContext=createContext();

const StoreProvider = ({children}) =>{
    
  const [store, dispatch] = useReducer(StoreReducer,initialStore)
 
    return(
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
}

export {StoreContext};
export default StoreProvider;
