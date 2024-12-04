import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import User from './User';
import Commands from './command';


function App() {
  return(

<div>
  
  <BrowserRouter>
    <Routes>
      <Route path='/'element={<Navigation/>}></Route>
      <Route path='/user'element={<User/>}></Route>
      <Route path='/command'element={<Commands/>}></Route>
    </Routes>
  </BrowserRouter>
</div>

  ) 
}

export default App;

