export default function championReducer(state=[], action){
    switch(action.type){
        case 'CREATE_CHAMPION':
            return [...state,
            Object.assign({}, action.champion)];
            
        default: 
            return state;
    }
}