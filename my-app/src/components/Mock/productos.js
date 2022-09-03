import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger,faHotdog, faIceCream, faMugHot} from "@fortawesome/free-solid-svg-icons";

export const producto =  
[
    {nombre:"Hamburgesa", precio:"350", stock:"10", icono:`${<FontAwesomeIcon icon={faBurger} />}` },
    {nombre:"Cafe", precio:"90", stock:"5", icono:`${<FontAwesomeIcon icon = {faMugHot}/>}` },
    {nombre:"Helado", precio:"70", stock:"7", icono:`${<FontAwesomeIcon icon = {faIceCream}/>}` },
    {nombre:"Pancho", precio:"250", stock:"9", icono:`${<FontAwesomeIcon icon = {faHotdog}/>}` }
]
