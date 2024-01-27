import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h2>Forms</h2>
      <MyForm user={{name: "João", email: "joao@gmail.com", bio:"Sou um advogado", role:"admin", cpf:"23330630094"}}/>
    </div>
  )
}

export default App
