import Notes from './containers/Notes';
import MainState from './context/MainState';

function App() {
  return (
    <MainState>
      <div className="App">
        <Notes />
      </div>
    </MainState>
  );
}

export default App;
