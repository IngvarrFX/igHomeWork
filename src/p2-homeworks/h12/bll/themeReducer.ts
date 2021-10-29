const initState = {
    theme: ""
};

type InitialStateType = {
    theme: string
}

export const themeReducer = (state: InitialStateType = initState, action: ActionThemeType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            debugger
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

type ChangeThemeCType = { type: "CHANGE_THEME", theme: string }
export const changeThemeC = (theme: string): ChangeThemeCType => ({type: "CHANGE_THEME", theme} as const); // fix any


type ActionThemeType = ChangeThemeCType