import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import AppContextProvider from './context';

function App() {
  return (
    <AppContextProvider>
      <div className='h-screen overflow-hidden flex text-gray-900'>
        <Sidebar />
        <MainContent />
      </div>
    </AppContextProvider>
  );
}

export default App;
