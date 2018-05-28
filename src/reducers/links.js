const initialState = {
    links: [
        {title: 'Home',route: '/'}
    ]
}

const reducer = function(state = initialState,action = "NISTA"){
    if(action.type === "ADD_LINK"){
        state.links = [...state.links,action.payload];
        return state;
    }
    if(action.type === "REMOVE_LINK"){
        state.links = [{title: 'Home',route: '/'}]
        return state;
    }
    return state;
}

export default reducer;