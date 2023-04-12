import axios from "axios";

// getAll items call
export const getAllItems = async(dispatch)=>{
    try {
        const res = await axios.get("http://localhost:3000/items");
        dispatch({type:"GET_ALL_ITEMS",payload:res.data});
    } catch (error) {
        dispatch({type:"ALLERT_MESSAGE",payload:"Internal Server Error"});
    }
}

// post item call
export const postItem = async (dispatch,data)=>{
    try {
        const item = await axios.post("http://localhost:3000/items",data);
        dispatch({type:"ALLERT_MESSAGE",payload:"Item Added Successfully"})
    } catch (error) {
        dispatch({type:"ALLERT_MESSAGE",payload:error.message})
    }
}

// get individual item call
export const getIndividualItem = async(dispatch,id)=>{
    try {
        const item = await axios.get(`http://localhost:3000/items/${id}`);
        await getAllItems(dispatch);
        dispatch({type:"GET_INDIVIDUAL_ITEM",payload:item.data})
    } catch (error) {
        dispatch({type:"ALLERT_MESSAGE",payload:error.message})
    }
}

// delete item call
export const removeItem = async(dispatch,id)=>{
    try {
        const item = await axios.delete(`http://localhost:3000/items/${id}`);
        await getAllItems(dispatch);
        dispatch({type:"REMOVE_FROM_CART",payload:id})
        dispatch({type:"ALLERT_MESSAGE",payload:"Item Deleted!"})
    } catch (error) {
        dispatch({type:"ALLERT_MESSAGE",payload:error.message})
    }
}