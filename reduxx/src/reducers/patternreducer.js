const initialState = {
    fething: false,
    fetched: false,
    users: [],
    error: null
};
export default function patternreducer (state=initialState , action) {
    switch(action.type){
        case 'FETCH_USERS_START':
        return{
            ...state,
            fething:true
        };
        
        case 'FETCH_USERS_ERROR':
        return{}; 
        
        case 'RECIEVE_USERS':
        return {};
        
        default:
        return state;
    }
}
