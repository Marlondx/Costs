// parte da nave pare colocar os linques 

import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../../img/costs_logo.png'
import navc from './navc.css'
function Navbar(params) {
    return (
      <div  className={navc.nav}>
        <nav className='nav'>
            <Container>
             <Link to ='/'>
                 <img src={logo} alt="Costs" /></Link>   
            <ul className='lista'>
                <li className="item">
                  <Link to='/'> Home </Link>
                </li>
                <li className="item">
                  <Link to='/projetos'>Projetos</Link>
                </li>
                <li className="item">
                  <Link to='/empresa'> Empresa</Link>
                </li>
                <li className="item">
                  <Link to='/contatos'>Contatos</Link>
                </li>
            </ul>
            </Container>

        </nav>
        
        </div>
    )
}

export default Navbar