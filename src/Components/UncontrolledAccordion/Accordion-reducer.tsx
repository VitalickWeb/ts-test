
export type ActionsType = {
    type: string
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}

export const accordionReducer = (state: StateType , action: ActionsType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
        return {...state,
            collapsed: !state.collapsed
        }
        default:
            return state
    }
}