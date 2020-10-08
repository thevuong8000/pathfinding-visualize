export const initialState = {
    speed: 20,
    algorithm: 'bfs',
};

export const actionTypes = {
    SET_ALGO: "SET_ALGO",
    SET_SPEED: "SET_SPEED",
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_SPEED:
            return {
                ...state,
                speed: action.speed,
            };
        case actionTypes.SET_ALGO:
            return {
                ...state,
                algorithm: action.algorithm,
            }
        default:
            return state;
    }
};
export default reducer;