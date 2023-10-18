import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './styles/App.css';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
