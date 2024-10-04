import './App.css';

import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Container from './components/layout/container'

import Home from  './components/pages/Home'
import List from  './components/pages/ListBooks'
import Create from  './components/pages/CreateBooks'

function App(){

  return(
    <>
    <BrowserRouter>
      <Container>
          <Routes>
            <Route path='/' element={<NavBar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/ListBooks' element={<List/>}/>
            <Route path='/createBook' element={<Create/>}/>
            </Route>
          </Routes>
      </Container>
    </BrowserRouter>
    </>
  )
}
export default App;