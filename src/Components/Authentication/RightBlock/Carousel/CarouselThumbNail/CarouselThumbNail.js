import styles from './CarouselThumbNail.module.css'
const CarouselThumbNail = (props) => {
    return (  
        <div className={styles.sliderThumbnail}>
            <div className={props.currentIndex === 0 ?`${styles.current}`: `${styles.default}`}></div>
            <div className={props.currentIndex === 1 ?`${styles.current}`: `${styles.default}`}></div>
            <div className={props.currentIndex === 2 ?`${styles.current}`: `${styles.default}`}></div>
        </div>
    );
}
 
export default CarouselThumbNail;