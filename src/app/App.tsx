import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useAppSelector } from './store.ts'
import { RequestStatusType } from './app-reducer.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'

export const App = () => {

  const status = useAppSelector<RequestStatusType>(state => state.app.status)

  return (
    <div>
      {status === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
