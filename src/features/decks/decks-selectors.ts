import { AppRootState } from '../../app/store.ts'

export const selectDeck = (state: AppRootState) => state.decksReducer.decks
