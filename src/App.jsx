import React from 'react'
import Sidebar from './Components/SideBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fsd from './Components/Fsd'
import Home from './Components/Home'
import Ds from './Components/Ds'
import Aiml from './Components/Aiml'
import Cyber from './Components/Cyber'

function App() {
  return <>
    <div id="wrapper">
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/fsd' element={<Fsd/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/ds' element={<Ds/>}></Route>
        <Route path='/ai-ml' element={<Aiml/>}></Route>
        <Route path='/cyber' element={<Cyber/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
</>
}

export default App
