import {useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import User from './User';
import Commands from './command';
import {UserInfoContext} from './Context';

function App() {
  const [userData, setUserData] = useState([])
  const [commentsData, setCommentsData] = useState([])
  const value = {userData, setUserData,commentsData, setCommentsData}

  return(

<div>
  <UserInfoContext.Provider value = {value}>
  <BrowserRouter>
    <Routes>
      <Route path='/'element={<Navigation/>}></Route>
      <Route path='/user'element={<User/>}></Route>
      <Route path='/command'element={<Commands/>}></Route>
    </Routes>
  </BrowserRouter>
  </UserInfoContext.Provider>
</div>

  ) 
}

export default App;

