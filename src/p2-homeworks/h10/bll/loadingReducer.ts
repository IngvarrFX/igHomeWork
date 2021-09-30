export type InitialStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}
type ActionType = LoadingAC
export const loadingReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

const LOADING = "LOADING"

type LoadingAC = {
    type: typeof LOADING
    isLoading: boolean
}
export const loadingAC = (isLoading: boolean): LoadingAC => ({type: LOADING, isLoading}) // fix any