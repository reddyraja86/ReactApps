import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MainContent from './components/main';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
