import { createContext, useReducer, ReactNode, useMemo } from 'react'

export enum ActionType {
    OpenModal = 'OPEN_MODAL',
    CloseModal = 'CLOSE_MODAL',
}

interface Action {
    type: ActionType
}

interface State {
    isOpenModal: boolean
}

const initState = {
    isOpenModal: false,
}

const AppContext = createContext<{
    state: State
    dispatch: React.Dispatch<any>
}>({
    state: initState,
    dispatch: () => null,
})

export const appReducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.OpenModal: {
            return {
                ...state,
                isOpenModal: true,
            }
        }
        case ActionType.CloseModal: {
            return { ...state, isOpenModal: false }
        }
        default: {
            return state
        }
    }
}

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(appReducer, initState)
    const valueContext = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return <AppContext.Provider value={valueContext}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
