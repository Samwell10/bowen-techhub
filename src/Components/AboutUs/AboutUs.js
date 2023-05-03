import AboutBlock from './AboutBlock/AboutBlock';
import styles from './AboutUs.module.css'
import CoreValues from './CoreValues/CoreValues';
import Intro from './Intro/Intro';
import Partners from './Partners/Partners';
import partnersData from './Partners/PartnersData';
import TechAbout from './TechAbout/TechAbout';
import TechAboutData from './TechAbout/TechAboutData';
const AboutUs = () => {
    return ( 
        <div className={styles.aboutUs}>
            <Intro/>
            <AboutBlock/>
            <CoreValues/>
            <ul className = {styles.techAbout}>
                {TechAboutData.map(data=>{
                    return(
                        <TechAbout data={data} key={data.id}/>
                    )
                })}
            </ul>
            <div className={styles.partners}>
                <h2>Partners</h2>
                <ul className={styles.partnersList}>
                    {partnersData.map(data=>{
                        return(
                            <Partners data={data} key={data.id}/>
                        )
                    })}
                </ul>
            </div>
        </div>
     );
}
 
export default AboutUs;