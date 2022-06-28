import Letter from "./Letter"
import { useState } from "react"
import './styles.css'

const Rainbow = () => {
    
    const [letters, setLetters] = useState([
        'r', 'a', 'i', 'n', 'b', 'o', 'w' 
    ]) 

  return (
    <div id="Rainbow">
        {letters.map((letter) => (
               <Letter letter={letter} id={letter} /> 
        ))}
    </div>
  )
}

export default Rainbow