const initialState = 
[
    {title: 'Editor' , route: '/editor'}
]


const reducer = function(state = initialState,action = "NISTA"){
    if(action.type === "ADD_PAGE"){
        state = [...state,action.payload];
        return state;
    }
    if(action.type === "REMOVE_LINK"){
        return [{title: 'Editor',route: '/editor'}];
    }
    return state;
}

export default reducer;