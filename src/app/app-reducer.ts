export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/CHANGE-STATUS':
      return {
        ...state,
        status: action.status,
      }
    case 'APP/SET-APP-ERROR':
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setErrorMessageAC>

export const setAppStatusAC = (status: RequestStatusType) => {
  return {
    type: 'APP/CHANGE-STATUS' as const,
    status,
  }
}

export const setErrorMessageAC = (error: string | null) => {
  return {
    type: 'APP/SET-APP-ERROR' as const,
    error,
  }
}
