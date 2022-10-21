import Notes from './containers/Notes'
import MainState from './context/MainState'

export default function App() {
  return (
    <MainState>
      <Notes />
    </MainState>
  )
}