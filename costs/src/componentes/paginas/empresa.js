import { useNavigate } from 'react-router-dom'
import Projetoform from '../projeto/projetosform'
import style from './enprec.css'

function Empresa(params) {
    const navegar = useNavigate()

    function criadorDeProjeto(projeto){
      // iNICIALIZADO O COSTE E O SERVIÇOS ADICIONANDO PROJETOS 
      projeto.cost = 0
      projeto.services=[]
      
      fetch('http://localhost:5000/projetos',{
          method: 'POST',
          headers: {
              'Content-Type':'application/json',
          },
          body:JSON.stringify(projeto),
      })
      .then((resp) => resp.json())
      .then((data) => {
          navegar('/projetos', {mensagem:'Porjeto enviado com suceso'})
      })
    }
    return (
        <section className={style.project}>
            <div className='project'>
                <h1>Criar Projeto</h1>
                <p>Cria seu projeto para depois adicionar os serviços</p>
                <Projetoform submite={criadorDeProjeto} bText= 'Cria seu Projeto'/>
            </div>

        </section>
    )


}

export default Empresa