const Textfield = (props) => {
    return ( 
        <div className="inputfield textfield">
            <label>{props.label}</label><br></br>
            <textarea
                type={props.type}
            >
            </textarea>
        </div>
    );
}
 
export default Textfield;