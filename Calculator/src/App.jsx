import { useState } from 'react'
import ToggleSearchBar from './Components/ToggleSearchBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ToggleSearchBar />
  )
}

export default App
