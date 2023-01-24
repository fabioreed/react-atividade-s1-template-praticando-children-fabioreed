import './App.css'
import { CenteredCard } from './components/CenteredCard'

function App() {

  return (
    <div className="App">
      <CenteredCard>
        <p>Conteudo que substitui o children</p>
      </CenteredCard>
      <CenteredCard>
        <div>
          <img 
            className='img' 
            src="https://images.pexels.com/photos/14891479/pexels-photo-14891479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          />
        </div>
      </CenteredCard>
    </div>
  )
}

export default App
