import Notes from './containers/Notes';
import MainState from './context/MainState';

function App() {
  return (
    <MainState>
      <Notes />
    </MainState>
  );
}

export default App;
