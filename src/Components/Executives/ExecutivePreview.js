import { Executives } from "./Executives";
import './ExecutivePreview.css'
const ExecutivePreview = () => {
    return ( 
        <div className="executivepreview">
            {Executives.map((executive)=>{
                return(
                    <div className="executive">
                        <div className="executive-image">
                            <img src={executive.image}></img>
                        </div>
                        <p className="executive-name">{executive.name}</p>
                        <p className="executive-position">{executive.position}</p>
                    </div>
                )
            })}
        </div>
    );
}
 
export default ExecutivePreview;