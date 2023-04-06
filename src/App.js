import logo from './logo.svg';
import './App.css';
import Main  from './rutes/main';
import Navbar from './components/Navbar';
import { Home } from './components/home';
import { Footer } from './components/footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
          <Navbar/>
        </header>
        <div className='m-0 min-h-full '>
           <Outlet/>
        </div>
          <Footer/>
    </div>
  );
}

export default App;
