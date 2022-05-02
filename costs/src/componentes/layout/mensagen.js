import { useState } from "react";
import style from '../layout/mensagen.css'
function Mensagens(type, msg) {
    const [visible, setVisible] = useState(false)

        useState(() => {
        if (!msg) {
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
        {visible &&(
        <div className={`${style.message} ${style[type]}`} >
            {msg}
        </div>
     )}
      </>
    )
}

export default Mensagens