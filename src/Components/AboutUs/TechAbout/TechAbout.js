import styles from './TechAbout.module.css'
const TechAbout = (props) => {
    return ( 
        <li key={props.data.id} className={styles.block}>
            <img src={props.data.img} alt="" />
            <h2>{props.data.headText}</h2>
            <p>{props.data.paragraph}</p>
        </li>
     )
}
 
export default TechAbout;