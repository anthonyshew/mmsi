export const initialState = {
    activeTheme: "light",
    isAuthenticated: false,
    color: "red",
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'loadLocalStorage':
            return action.localStorageState
        case 'adminLogout':
            return {
                ...state,
                isAuthenticated: false
            }
        case 'COLOR_CHANGE':
            return {
                ...state,
                color: action.color
            }
        default:
            return state
    }
}