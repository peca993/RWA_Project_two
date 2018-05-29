/*
const initialState = 
    fetch("http://localhost:5050/pages")
          .then(response => response.json())
*/

const initialState = [
    {title: 'Editor' , route: '/editor'}
]


const reducer = function(state = initialState,action = "NISTA"){
    if(action.type === "ADD_PAGE"){
        state = [...state,action.payload];
        return state;
    }
    if(action.type === "REMOVE_LINK"){
        state.links = [{title: 'Editor',route: '/editor'}]
        return state;
    }
    return state;
}

export default reducer;