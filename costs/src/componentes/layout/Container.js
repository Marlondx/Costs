import cont from './containec.css'

function Container(props) {
    return (<div className= {cont.Container}> 
    <div className ='Container'>
        {props.children}</div>

    </div>)
}

export default Container