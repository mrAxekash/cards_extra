import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { addErrorAC } from '../../app/app-reducer.ts'

export const handleError = (dispatch: Dispatch, e: unknown) => {
  let errorMessage: string
  if (isAxiosError<ErrorMessagesType>(e)) {
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
  } else {
    errorMessage = (e as Error).message
  }
  dispatch(addErrorAC(errorMessage))
}

type ErrorMessagesType = {
  errorMessages: [{ field: string; message: string }]
}
