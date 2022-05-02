
import {useLocation} from'react-router-dom'

import Container from '../layout/Container'
import Linkhome from '../layout/linkhome'
import Mensagens from '../layout/mensagen'


import style from '../paginas/projetocs.css'
function Projetos() {
    const location = useLocation
    let mensagen =''
    if (location.state){
        mensagen = location.state.mensagen
    }

    return(
        <div className={style}>
            <div className="estilo">
                <div className='estilo-cotener'></div>
                <h1>Meus projetos </h1>
                <Linkhome to = '../empresa' texto =' criar projeto'/>
            </div>
            {mensagen && < Mensagens type='sucesso'msg={mensagen}/>}
            <Container customClass='start'>
                <p>Projetos...</p>
            </Container>
           
        </div>
     )

    }


export default Projetos