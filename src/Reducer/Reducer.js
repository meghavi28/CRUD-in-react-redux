const intialState = {
    login_data_list: [],
    Register_Data_list: [],
    Display_list: [],
    Auth_Data: {},
    edit_data: []
}

export const ADD_LOGIN_DATA = 'ADD_LOGIN_DATA';
export const ADD_REGISTER_DATA = 'ADD_REGISTER_DATA';
export const DISPLAY_DATA = 'DISPLAY_DATA';
export const AUTH_DATA = 'AUTH_DATA';
export const EDIT_DATA = 'EDIT_DATA';


const Reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_LOGIN_DATA:
            return Object.assign({}, state, { login_data_list: action.data })
        case ADD_REGISTER_DATA:
            return Object.assign({}, state, { Register_Data_list: action.data })
        case DISPLAY_DATA:
            return Object.assign({}, state, { Display_list: action.data })
        case AUTH_DATA:
            return Object.assign({}, state, { Auth_Data: action.data })
        case EDIT_DATA:
            return Object.assign({}, state, { edit_data: action.data })
        default:
            return state
    }
}


export default Reducer;
