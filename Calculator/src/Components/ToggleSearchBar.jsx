import  {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import styles from './ToggleSearchBar.module.css'
const ToggleSearchBar = () => {
    const [inputElement  , setInputElement] = useState(false);
    const [bgColor , setbgColor] = useState('wheatsmoke');

    const handleChange = (e) => {
        
        if (e.target === e.currentTarget) {
            setInputElement(false);
          }
          
        

    }

    return (
        <section className= {styles.container}
            style = {{ backgroundColor : bgColor}}
            onClick = {handleChange}
        >
            {
             inputElement ? (
                <input type="text" placeholder='Search' />
             ) : (
                <FaSearch
                     onClick = {() => {
                    
                    setInputElement(true)
                }}/>
             )

            }
        </section>
    )
}   



export  default ToggleSearchBar;

