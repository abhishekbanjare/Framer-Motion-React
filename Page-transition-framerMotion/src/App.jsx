import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Menu from './component/menu/Menu'
import About from './component/about/About'
import Contact from './component/contact/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />   
      <Menu />
      <About />
      <Contact />
    </>
  )
}

export default App
