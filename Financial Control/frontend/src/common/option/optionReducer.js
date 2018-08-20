const INITIAL_STATE = {checked: ''}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'OPTION_CLICK':
            return {...state, checked: action.payload}
        default:
            return state
    }
}