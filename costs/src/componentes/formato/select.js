import style from './selectcs.css'

function Selects({ text, name, options, handleOnChange, value }) {
    return (
        <nav className={style.seleciona}>
            <div className="selecionar">
                <label htmlFor={name}>{text}: </label>
                <select name={name}
                    id={name} onChange={handleOnChange} >
                <option>Seleciona uma opção</option>
                {options.map((option)=>(
                   <option value={option.id} key={option.id}>
                        {option.name}
                   </option>
                ))}
                </select>

            </div>
        </nav>
    )
}

export default Selects 