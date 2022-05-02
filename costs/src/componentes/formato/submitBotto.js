import estilo from './subimiBottocs.css'

function SubmitBotto({text}) {
    return(
         <div className={estilo}>
          <button className="but">{text}</button>
        </div>
   
    )
}

export default SubmitBotto