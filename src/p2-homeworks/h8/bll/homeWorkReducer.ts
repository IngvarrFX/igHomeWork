import {InitialPeopleType} from "../HW8";


type ActionType = {
    type: "sort" | "check"
    payload: "up" | "down" | number
}

export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => { // need to fix any
    switch (action.type) {
        case "sort": {
            let copyState = [...state]
            if(action.payload === "up"){
                copyState.sort((a, b) => a.name.localeCompare(b.name))
                return copyState
            }else{
               return  copyState.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            }
        return copyState
        }
        case "check": {

            return [...state.filter(u => u.age >= 18)]
        }
        default:
            return state
    }
}

