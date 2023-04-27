import './Sponsor.css'
import tecchstart from '../../images/sponsor/techstart.png';
import google from '../../images/sponsor/google.png'
import microsoft from '../../images/sponsor/microsoft.png'
import coursera from '../../images/sponsor/coursera.png'
import dsn from '../../images/sponsor/dsn.png'
const Sponsor = () => {
    return ( 
        <div className="sponsor">
            <div className="sponsor-image">
                <img src={tecchstart}></img>
            </div>
            <div className="sponsor-image">
                <img src={google}></img>
            </div>
            <div className="sponsor-image">
                <img src={microsoft}></img>
            </div>
            <div className="sponsor-image">
                <img src={coursera}></img>
            </div>
            <div className="sponsor-image">
                <img src={dsn}></img>
            </div>
        </div>
    );
}
 
export default Sponsor;