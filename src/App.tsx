import { useState } from 'react';
import './App.css'
import reactLogo from './assets/react.svg'
import { SharingState } from './components/SharingState/SharingState'

function App() {
  const [nome, mudaNome] = useState('novo');

  return (
    <div>
      <input value={nome} onChange={(event) => mudaNome(event.target.value)}></input>
      <h1>#epic</h1>
      <img src={reactLogo} className="logo react"></img>

      <SharingState nome={nome} onUpdate={mudaNome}></SharingState>
      
    </div>
    
  )
}

export default App
