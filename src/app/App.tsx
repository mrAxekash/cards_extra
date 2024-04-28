import './App.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useAppSelector } from './store.ts'
import { selectAppStatus } from './app-selectors.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'

export const App = () => {
  const status = useAppSelector(selectAppStatus)

  return (
    <div>
      {status === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
      <footer>
        Hello world Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello
        worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello
        worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello
        worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello
        worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello
        worldHello worldHello world
      </footer>
    </div>
  )
}
