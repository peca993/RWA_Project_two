
const initialState = ['ReactCMS'];


const reducer = function(state = initialState,action = "NISTA"){
    if(action.type === "CHANGE_TITLE"){
        state = [...state,action.payload];
        return state;
    }
    return state;
}

export default reducer;