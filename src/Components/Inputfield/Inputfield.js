import './Inputfield.css';
const Inputfield = (props) => {
    return ( 
        <div className="inputfield">
            <label>{props.label}</label><br></br>
            <input
                type={props.type}
            >
            </input>
        </div>
    );
}
 
export default Inputfield;