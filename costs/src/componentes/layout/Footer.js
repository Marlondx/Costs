import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Estilo from './footerc.css'
function Footer(params) {
    return (
        <div className={Estilo.estilo}>
            <footer className='footer'>
                <ul className='lista'>
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaLinkedin />
                    </li>
                </ul>
                <p className='copy'>

                    <span>Costs</span>&copy; 2022 
                   
                </p>
            </footer>
        </div>
    )
}

export default Footer