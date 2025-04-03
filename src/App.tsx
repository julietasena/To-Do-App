

import SprintList from './components/SprintList';
import BacklogList from './components/screens/Backloglist';
import Sprint from './components/screens/Sprint';
import { useStore } from './store/botonStore';

function App() {
  const { showBacklog} = useStore();

  return (
    <div className="flex min-h-screen bg-gray-100">
        
      <div className="w-1/4 bg-[#226f54] p-4 border-r ">
      <div className="bg-[#87c38f] rounded-2xl p-4 mi-h-screen h-full">
      <SprintList />
      </div>
       
      </div>
      
      <div className="w-3/4 p-6">
      {showBacklog ? <BacklogList /> : <Sprint id="1" name="Sprint 1"/>}
      </div>
      <div>

      <footer className="relative h-16 bg-gray-800">
  <svg
    className="absolute -top-5 left-0 w-full"
    viewBox="0 0 1440 100"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="white"
      d="M0,100 C150,0 300,0 450,100 C600,200 750,200 900,100 C1050,0 1200,0 1350,100 L1440,100 L1440,0 L0,0 Z"
    />
  </svg>
</footer>
      </div>

    </div>
    
  )
}

export default App