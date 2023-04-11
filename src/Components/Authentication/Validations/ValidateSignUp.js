const ValidateSignUp = (entry, /*data*/) => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let errors = {}
    if(entry.firstname === "" ||entry.lastname === "" ||entry.email === "" ||entry.password === "" ||entry.community === "" ||entry.community === null || entry.skills === []){
        errors.all = "Please fill all fields"
    }
    else{
        errors.all = ""
    }
    if(entry.firstname===""){
        errors.firstname = "Please fill all fields"
    }
    if(entry.lastname===""){
        errors.lastname = "Please fill all fields"
    }
    if(entry.email===""){
        errors.email = ""
    }
    if(entry.password===""){
        errors.password = "Please fill all fields"
    }
    if(entry.community===""){
        errors.community = "Please fill all fields"
    }
    if(!entry.skills.length){
        errors.skills = "Please fill all fields"
    }

    // for(let i = 0; i < data.length; i++){
    //     if(data[i] === entry.email){
    //         errors.email = "This email has been used!"
    //     }
    // }
    return errors;
}
 
export default ValidateSignUp;