
import SprintList from './components/SprintList';
import BacklogList from './components/Backloglist';

function App() {

  return (
    <div className="flex min-h-screen blue">
      <div className="w-1/4 bg-custom-green p-4 border-r">
        <SprintList />
      </div>
      <div className="w-3/4 p-6">
        <BacklogList />
      </div>
    </div>
  )
}

export default App
