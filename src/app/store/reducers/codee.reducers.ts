import * as actions from './../actions';

export function codeeReducer(state = initialState, action: actions.CodeeActions) {
    const newState  = {...state};
    switch(action.type) {
        case actions.GET_CODEE_SUCCESS:
        const getCodeeSuccessAction = action as actions.GetCodeeSuccess;
        newState.codeez = [...newState.codeez, getCodeeSuccessAction.payload];
        return newState;
        default: 
        return state;
    }
}

export const initialState = {
    codeez: []
}