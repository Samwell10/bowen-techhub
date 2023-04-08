import Choice from '../Choice/Choice';
import styles from './ChoiceBlock.module.css'
const ChoiceBlock = (props) => {
    return ( 
        <ul className={styles.choiceBlock}>
            {props.choices.map(choice=>{
                return(
                    <Choice key={Math.random()} choice={choice}/>
                )
            })}
        </ul>
     );
}
 
export default ChoiceBlock;