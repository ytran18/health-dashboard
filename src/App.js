import './App.css';

import Dashboard from './components/dashboard/index.jsx';
import Sidebar from './components/sidebar/index.jsx';

function App() {
  return (
        <div className="w-screen h-screen flex">
            <div className='w-[75%] h-full bg-[rgb(244,250,254)]'>
                <Dashboard />
            </div>
            <div className='w-[25%] h-full'>
                <Sidebar />
            </div>
        </div>
  );
}

export default App;
