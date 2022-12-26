import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import Navbar from './components/Navbar';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
