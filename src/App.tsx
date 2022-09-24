import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='h-screen overflow-hidden flex text-gray-900'>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
