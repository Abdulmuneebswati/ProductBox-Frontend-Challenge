
const ItemsReducer = (state,action)=>{

    switch (action.type) {
        case  "GET_ALL_ITEMS":
           
            return ({
                ...state,
                items:action.payload,
                message:"",
            })
        case "GET_INDIVIDUAL_ITEM":
            return ({
                ...state,
                item:action.payload
            })
        case "ADD_TO_CART":
            const token = JSON.parse(localStorage.getItem("cart"));
            if (token) {
                localStorage.setItem("cart",JSON.stringify(token.concat(action.payload)))
            }else{
                localStorage.setItem("cart",JSON.stringify([action.payload]))
            }
               return {
                ...state,
                message:"Item Added To The Cart!",
               }
        case "REMOVE_FROM_CART":
                const items = JSON.parse(localStorage.getItem("cart"));
                let newArr = items.filter(item => item.id !== action.payload)
               
                    localStorage.setItem("cart",JSON.stringify(newArr))
                return {
                    ...state,
                     message:"Item Removed From The Cart!",
                   }
        case "ALLERT_MESSAGE":
            return {
                ...state,
                message:action.payload
            }
        case "REMOVE_MESSAGE":
            return {
                ...state,
                message:""
            }
        default:
            return state;
    }
}
export default ItemsReducer;