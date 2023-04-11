import { useState } from 'react';
import {FaChevronDown,FaChevronUp} from 'react-icons/fa'
import styles from'./SelectField.module.css'
const SelectField = (props) => {
    const communities = [
        'Frontend Community',
        'Backend Community',
        'Software Development',
        'Game Development',
        'Product Management',
        'UI/UX',
        'Graphics Design',
        'Data Science'
]
    const [option, setOption] = useState("")
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        if(!open){
            setOpen(true)
        }
        else{
            setOpen(false)
        }
    }
    return (
            <div className={styles.selectMenu}>
                <div className={props.error? `${styles.errorField} ${styles.selectBtn}`: styles.selectBtn} onClick={handleOpen}>
                    <span className={styles.sBtnText}>{!option?'Select your community':option}</span>
                    {open ? 
                        <FaChevronUp style={{color: 'rgba(122, 122, 122, 1)', width: '10px'}}/> :
                        <FaChevronDown style={{color: 'rgba(122, 122, 122, 1)', width: '10px'}}/>  
                    }
                </div>
                {open && <ul className={styles.options}>
                    {communities.map(community=>{
                        return(
                            <li key={Math.random()} 
                                onClick={(()=>{
                                    setOption(community);
                                    props.onReceive(community);
                                    setOpen(false)
                                })}>
                                {community}
                             </li>
                        )
                    })}
                </ul>}
            </div>        
     );
}
 
export default SelectField;