import styles from './CoreValues.module.css'
import Slider from './Slider/Slider';
const CoreValues = () => {
    return (  
        <div className={styles.coreValues}>
            <div className={styles.top}>
                <h2 className={styles.missionDesc}>Our Mission and Objectives</h2>
            </div>
            <Slider/>
        </div>
    );
}
 
export default CoreValues;