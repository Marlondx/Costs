import {useState, useEffect} from 'react'
import ProjectForm from './projetoformcs.css'
import Input from "../formato/Input"
import Selects from '../formato/select'
import SubmitBotto from '../formato/submitBotto'

function Projetoform({submite,bText,projetodata}) {
    
    const [categoria,setCategories]=useState([])
    const [projeto,setProjeto]=useState(projetodata || {})

    useEffect(() => {
        fetch('http://localhost:5000/categoria',{
            method: "GET",
            headers: {
                'Content-Type':'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((erro)=> console.log(erro))
    },[])
     const submit= (e) => {
         e.preventDefault()
         submite(projeto)
     }

     function coletarinfo(e){
         setProjeto({...projeto, [e.target.name]:e.target.value})
     }

    function coletarcatego(e){
        setProjeto({
        ...projeto,
        categoria: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
      
    }
    
    return(
        
        <form  onSubmit ={submit} className={ProjectForm}>
            <div className='Projetos'>
            <Input className='move' 
            type ='text'
            text = 'Nome do projeto'
            name = 'name '
            placeholder = 'Insira o nome do projeto'
            handleOnChange = {coletarinfo}
            value= {projeto.name }

           />
           <Input type='number'
           text= 'Orçamento do Projeto'
           name="budget"
           placeholder="Insira o orçamento "
           handleOnChange={coletarinfo}
           value={projeto.budget ? projeto.budget : ''}
           />

           <Selects name='category_id'
           text="Seleciona a categoria"
           options={categoria}
           handleOnChange={coletarcatego}
           value = {projeto.categoria ? projeto.categoria.id : ''}
           />

           <SubmitBotto text={bText}/>

          </div>
           
        </form>
    )
}

export default Projetoform 