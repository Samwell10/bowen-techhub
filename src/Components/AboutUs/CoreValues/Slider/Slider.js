import { useState, useEffect } from 'react';
import styles from './Slider.module.css'
import SliderData from './SliderData';
const Slider = () => {
    let slideInterval;
    const autoScroll = true;
    const dataLength = SliderData.length;
    const [currentIndex, setCurrentIndex] = useState(0)
    const moveToExactSlide = (e) => {
        for(let data of SliderData)
        if(data.contentName === e.target.innerText.toLowerCase() ){
            setCurrentIndex(SliderData.indexOf(data))
        }
    }
    const nextSlide = () => {
        setCurrentIndex(currentIndex === dataLength -1 ? 0 : currentIndex + 1);
    }
    useEffect(()=>{
        if(autoScroll){
            slideInterval = setInterval(nextSlide,7000)
         }
        return ()=>{
            clearInterval(slideInterval)
        }
    },[currentIndex])
    return ( 
        <div className={styles.slider}>
            <div className={styles.carouselControls}>
                <span className={currentIndex === 0 ? `${styles.currentDesc} ${styles.desc}`: styles.desc} onClick={moveToExactSlide}>Mission</span>
                <span className={currentIndex === 1 ? `${styles.currentDesc} ${styles.desc}`: styles.desc} onClick={moveToExactSlide}>Vision</span>
                <span className={currentIndex === 2 ? `${styles.currentDesc} ${styles.desc}`: styles.desc} onClick={moveToExactSlide}>Focus</span>
            </div>
            <div className={styles.sliderContainer}>
                <ul className={styles.sliderTrack}>
                    {SliderData.map(data=>{
                        return(
                            <li key={data.id} className={data.id === currentIndex ? `${styles.page} ${styles[data.contentName]} ${styles.currentPage}`: `${styles[data.contentName]} ${styles.page}`}>
                                {data.id === currentIndex && (
                                    <div className={styles.innerBlock}>
                                        <p>{data.text}</p>
                                        <img className={styles.quote} src={data.quote} alt="" />
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
     );
}
 
export default Slider;