import './App.css'
import CardBooks from './components/CardBooks'
import capaLivro from './assets/carmilla.jpg'
import capaLivro2 from './assets/dracula.jpg'
 
function App() {
 
 
  return (
    <div className='nsei' >

      <div>
       <CardBooks
      titulo ='carmilla'
      autor= 'sheridan fenu'
      imagem={capaLivro}
      />
      </div>
      <div>
      <CardBooks
      titulo ='dracula'
      autor= 'Bram Stoker'
      imagem={capaLivro2}
      />
      </div>
    </div>
  
  )
}
 
export default App