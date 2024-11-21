
import './App.css'
import Header from './component/header/Header'
import Home from './component/home/Home'
import Menu from './component/menu/Menu'
import About from './component/about/About'
import Contact from './component/contact/Contact'

function App() {

  return (
    <div className='app-container'>
      <Header />
      {/* <Home /> */}
      <Menu />
      <About />
      <Contact />
    </div>
  )
}

export default App
