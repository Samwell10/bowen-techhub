import { useState, useEffect } from 'react'
import styles from './Carousel.module.css'
import CarouselData from './CarouselData'
import CarouselThumbNail from './CarouselThumbNail/CarouselThumbNail';
const Carousel = () => {
    let slideInterval;
    const autoScroll = true;
    const carouselLength = CarouselData.length
    const [currentIndex, setCurrentIndex] = useState(0)
    const nextSlide = () => {
        setCurrentIndex(currentIndex === carouselLength -1 ? 0 : currentIndex + 1);
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
            <div className={styles.sliderContainer}>
                <ul className={styles.sliderTrack} >
                    {CarouselData.map((slide)=>{
                        return(
                            <li className={slide.id === currentIndex ? `${styles.developer} ${styles.currentSlide}`: styles.developer} key={slide.id}>
                                {slide.id === currentIndex &&(
                                    <>
                                        <div className={styles.title}>
                                            <img className={styles.img} src={slide.image} alt="slide" />
                                            <div className={styles.details}>
                                                <h4>{slide.name}</h4>
                                                <p>{slide.role}</p>
                                            </div>
                                        </div>
                                        <p className={styles.description}>{slide.desc}</p>
                                    </>
                                )}
                            </li>
                        )
                    })}
                </ul>
                <CarouselThumbNail currentIndex ={currentIndex}/>
            </div>
     );
}
 
export default Carousel;