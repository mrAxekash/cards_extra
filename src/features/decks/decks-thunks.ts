import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatusAC } from '../../app/app-reducer.ts'
import { isAxiosError } from 'axios'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setAppStatusAC('succeeded'))
    dispatch(setDecksAC(res.data.items))
  } catch (e) {
    dispatch(setAppStatusAC('failed'))
  }

  // decksAPI.fetchDecks().then((res) => {
  //   dispatch(setDecksAC(res.data.items))
  // })
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}
// case 1 Ошибка, сгенерированная на backend, и ошибку генерирует axios в поле e.response.data.errorMessages
// case 2 Ошибка, сгенерированная на тороне пользователя. axios создает объект ошибки, сообщение можно взять из поля e.message
// case 3 Ошибка, синхронная ошибка - создается нативная JS-ошибка, имеет поле message
export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (e: unknown) {
    let errorMessage: string

    if (isAxiosError<ServerError>(e)) {
      errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
      // if (e.response) {
      //   errorMessage = e.response.data.errorMessages[0].message
      // } else {
      //   errorMessage = e.message
      // }
    } else {
      errorMessage = (e as Error).message
    }
    //return errorMessage
    console.log(errorMessage)
  }
}

type ServerError = {
  errorMessages: Array<{ field: string; message: string }>
}
