import styles from './inputcs.css'
function Input({type,text,name,placeholder,handleOnChange,value}) {
    return(
     <section className={styles.input}>
       <div className='input_boto'> 
           <label htmlFor={name}>{text}:</label>
        <input type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange ={handleOnChange}
        value={value} />
       </div>
       
     </section>
    )
}

export default Input