export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'CHANGE-STATUS':
      return { ...state, status: action.payload.status }
    case 'ADD-ERROR':
      return { ...state, error: action.payload.error }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof changeStatusAC> | ReturnType<typeof addErrorAC>

export const changeStatusAC = (status: RequestStatusType) => {
  return {
    type: 'CHANGE-STATUS' as const,
    payload: {
      status,
    },
  }
}

export const addErrorAC = (error: string | null) => {
  return {
    type: 'ADD-ERROR' as const,
    payload: {
      error,
    },
  }
}
