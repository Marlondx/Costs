import Homec from'./Homec.css'
import imagemCost from '../../img/savings.svg'
import Linkhome from '../layout/linkhome'


function Home() {



    return(
        <section className= {Homec.oi} >
            <div className="corpo">
                <h1>

                    Bem vindo ao <span>Costs</span>
    
                </h1>
                <p>Comece a gerar o seu projeto agora mesmo u</p>
                <Linkhome to = './empresa' texto =' criar projeto'/>
                <img src={imagemCost} alt="" />
            </div>
        </section>
     )
}

export default Home