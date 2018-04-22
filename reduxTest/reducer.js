const defaultState={
    colorCon:'blue',
};
const reducer = (state=defaultState,action) => {
    switch (action.type){
        case 'Vang' : return {...state,colorCon:'yellow'};
        case 'Do' : return {...state,colorCon:'red'};
        case 'Den' : return {...state,colorCon:'black'};
        default:
            break;
    }
    return state;
};
export default reducer;