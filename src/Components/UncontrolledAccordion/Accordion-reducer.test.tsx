import {accordionReducer, ActionsType, StateType, TOGGLE_COLLAPSED} from "./Accordion-reducer";

test("reducer should be collapsed true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newCollapsed = accordionReducer(state, {type: "TOGGLE-COLLAPSED"})

    //expect
        expect(newCollapsed.collapsed).toBe(true)
})

test("reducer should be collapsed false", () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newCollapsed = accordionReducer(state, {type: "TOGGLE-COLLAPSED"})

    //expect
    expect(newCollapsed.collapsed).toBe(false)
})

test("if in reducer be have error, those show error", () => {
    //data
    const state: StateType = {
        collapsed: true,
    }

    //action
    let action = accordionReducer(state, {type: "FAKE"})

    expect(action === state).toBe(true);
})