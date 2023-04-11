const ValidateLogin = (entry/*, data*/) => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let errors = {}
    if(!regexEmail.test(entry.email)){
        errors.email = "Enter a valid email"
    }
    if(entry.password === ""){
        errors.password = "Password cannot be empty."
    }
    // for(let i = 0; i < data.length; i++){
    //     if(data[i].email === entry.email){

    //     }
    //     else{
    //         errors.email = "This email is not linked to an account"
    //     }
    //     if(data[i].password === entry.password){

    //     }
    //     else{
    //         errors.password = "Incorrect Password"
    //     }
    // }
    return errors;
}
 
export default ValidateLogin;