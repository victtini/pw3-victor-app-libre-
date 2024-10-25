/* IMPORTA O CSS */
import './App.css'

//IMPORTA O COMPONENTE CONTAINER
import Container from './components/layout/Container'

//IMPORTA O COMPONENTE NAVBAR
import NavBar from './components/layout/NavBar'

// IMPORTA OS COMPONENTES DE NAVEGAÇÃO DA APLICAÇÃO
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//
import Home from './components/pages/Home'

import CreateBooks from './components/pages/CreateBooks' 

import ListBooks from './components/pages/ListBooks' 
import DeitailBook from './components/pages/DetailBook'


function App() {
 
 
  return (
    <>

      {/* ESTRUTURA DE NAVEGAÇÃO */}
        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>
                <Route path='/' element={<Home />}/>
                <Route path='/listBooks' element={<ListBooks />}/>
                <Route path='/createBooks' element={<CreateBooks />}/>
                <Route path='/DetailBook/:cod_livro' element={<DeitailBook />}/>
              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

    </>
  )
}
 
export default App