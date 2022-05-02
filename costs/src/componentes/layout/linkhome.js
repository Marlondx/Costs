import { Link } from "react-router-dom";
import Linkcss from './linkhome.css';

function Linkhome ({to,texto}) {
    return(
        <div className={Linkcss.li}>
       <Link className="cor" to={to}>
           {texto}
       </Link>
       </div>
    )
}
export default Linkhome 