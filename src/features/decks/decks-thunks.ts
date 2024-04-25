import { Dispatch } from 'redux'
import { AddDeckParams, decksApi } from './decks-api.ts'
import { addDeckAC, fetchDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(fetchDecksAC(res.data.items))
  })
}

export const addDeckTC = (params: AddDeckParams) => (dispatch: Dispatch) => {
  return decksApi.addDeck(params).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}
