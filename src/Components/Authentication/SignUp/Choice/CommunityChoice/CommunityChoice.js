import { useState } from 'react'
import {BiX} from 'react-icons/bi'
import styles from './CommunityChoice.module.css'
const CommunityChoice = (props) => {
    const [isCommunitySelected, setIsCommunitySelected] = useState(true)
    const handleClick = () => {
        props.setCommunity(null)
        setIsCommunitySelected(false)
    }
    return (
        <>
            {isCommunitySelected&&
            <div className={styles.myChoice}>
                <span className={styles.choiceTxt}>{props.community}</span>
                <BiX onClick={handleClick} style={{width: "20px", color:"black", cursor:"pointer"}}/>
            </div>}
        </> 
     );
}
 
export default CommunityChoice;