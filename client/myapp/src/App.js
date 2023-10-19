import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './styles/App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import AddItem from './components/addItem';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import EditItem from './components/editItem';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path= '/addItem' element={<AddItem/>}/>
              <Route path='/editItem'>
                <Route path=':id'element={<EditItem/>}/>
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
