import Carousel from './Carousel/Carousel';
import styles from './RightBlock.module.css'
const RightBlock = () => {
    return (  
        <div className={styles.rightBlock}>
            <h4 className={styles.h4}>BTH.</h4>
            <div>
                <h1 className={styles.h1}>Check out what we have for you today.</h1>
                <p className={styles.p}>Integer aenean enim dolor ac blandit pulvinar non faucibus. Aenean volutpat et integer a.</p>
            </div>
            <Carousel/>
        </div>
    );
}
 
export default RightBlock;