import {BiX} from 'react-icons/bi'
import styles from './SkillsChoice.module.css'
import SkillsDictionary from '../../SearchField/SkillsDictionary/SkillsDictionary'
const SkillsChoice = (props) => {
    const handleClick = (item) => {
        const myDictionary = new SkillsDictionary(props.skills)
        myDictionary.remove(item)
    }
    return ( 
        <ul className={styles.mySkills}>
            {props.skills.map(skill=>{
                return(
                    <li key={Math.random()} className={styles.myChoice}>
                        <span className={styles.choiceTxt}>{skill}</span>
                        <BiX onClick={()=>handleClick(skill)} style={{width: "20px", color:"black", cursor:"pointer"}}/>
                    </li>
                )
            })}
        </ul>
     );
}
 
export default SkillsChoice;