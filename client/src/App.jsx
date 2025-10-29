import logo  from './assets/suyena-logo.png'
import './App.scss'

function App() {

  return (
    <>
    <header>
      <div>
        <img src={logo} alt="Suyena Logo" />
      <h1>Suyena Society</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#goals" >Our Goals</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default App
