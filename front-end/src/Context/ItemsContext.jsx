import React, { useEffect } from "react";
import { createContext, useReducer } from "react"
import Itemsreducer from "./Itemsreducer";

const INITIAL_STATE = {
    items: null,
    item:null,
    message:"",
  
}

export const Itemscontext = createContext(INITIAL_STATE);

function  ItemsContextProvider({children}){
    const [state,dispatch] = useReducer(Itemsreducer,INITIAL_STATE);



// ==============================
        // return
// ==============================
    return(
        <Itemscontext.Provider value={{ items:state.items, dispatch:dispatch,cartItems:state.cartItems,message:state.message,item:state.item}}>
            {children}
        </Itemscontext.Provider>
    );
}

export default ItemsContextProvider;