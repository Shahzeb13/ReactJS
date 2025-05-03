import { useState } from "react";
import styles from './Accordian.module.css'
import lifeLessons from '../data.js';

const Accordian = () => {
    const [visibleId, setVisibleId] = useState(null); 


    
  return (


    
       <div className={styles.container}>
        {
           lifeLessons.map((lesson) => {
            return( <div className = {styles.card} key = {lesson.id}>
                <div className = {styles.upperCard} onClick={() => 
  setVisibleId(visibleId === lesson.id ? null : lesson.id)
}
 >
                    <h3>{lesson.title}</h3>
                    <p >{visibleId ? '-' : '+' }</p>
                </div>
                <div className={styles.card_content}>
                    {visibleId === lesson.id && <p>{lesson.content}</p>}
                
                </div>
                
                </div>
            )
        }) 
        }
        
       </div>
    
    // <div className={styles.container}>
    //     <div class = {styles.card}>
    //     <h3>Time is the Real Wealth</h3>
    //     <p>
    //         Money can be earned again, but time once gone never returns. Invest it
    //         wisely in learning, relationships, and growth.
    //     </p>

    //     </div>
      
    // </div>
  );
};

export default Accordian