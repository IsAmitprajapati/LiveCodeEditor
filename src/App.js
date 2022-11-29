import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <div className='text-sm'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
      />
      </div>
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default App;
