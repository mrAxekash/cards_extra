import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { selectAppError } from '../app-selectors.ts'
import { useAppDispatch } from '../store.ts'
import { setErrorMessageAC } from '../app-reducer.ts'

export const GlobalError = () => {
  const errorMessage = useSelector(selectAppError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setErrorMessageAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
