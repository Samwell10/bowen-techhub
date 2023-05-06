import styles from './Partners.module.css'
const Partners = (props) => {
    return ( 
        <li className={styles.partner}>
            <img src={props.data.img} alt="" />
        </li>
     );
}
 
export default Partners;