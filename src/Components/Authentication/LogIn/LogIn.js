import RightBlock from '../RightBlock/RightBlock';
import Card from '../Card/Card';
import {useState} from 'react'
import styles from './LogIn.module.css'
import axios from 'axios';
import useFetch from '../UseFetch/UseFetch';
const Login = () => {
    const regexEmail = ""
    const [formErrors, setFormErrors] = useState({})
    const [networkErr, setNetworkErr] = useState("")
    const [details, setUserDetails] = useState({
        email: "",
        password: ""
    })
    const api = ""
    const handleChange = (e) => {
        const {name, value} = e.target
        setUserDetails((prev)=>{
            return(
                {...prev, [name]: value}
            )
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateLoginDetails(details))
        if(formErrors){
            return;
        }
        else{
            // const {usersData} = useFetch(api)
        }
        // axios.post(api, {userLoginDetails})
        // .then(res=>{
        //     return res.json()
        // })
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(err=>{
        //     setNetworkErr(err)
        // })
    }
    const validateLoginDetails = (entry) => {
        const errors = {};
        if(entry.email === ""){
            errors.email = "Email cannot be empty.";
        }
        if(entry.password === ""){
            errors.password = "Password cannot be empty."
        }
        else if(!entry.email.includes('@')){
            errors.email = "Email must contain @."
        }
        else if(!entry.email.match(regexEmail)){
            errors.email = "Please enter a valid email."
        }
        if(entry.email){
            errors.email = "This email is not linked to an account"
        }
        if(entry.password){
            errors.password = "Incorrect Password"
        }
        return errors;
    }
    return ( 
        <Card>
            <div className={styles.leftBlock}>
                <div className={styles.intro}>
                    <h2 className={styles.h2}>Welcome back</h2>
                    <p className={styles.p}>You don’t have an account already? <span><a className={styles.a} href="">Sign Up</a></span></p>
                </div>
                <form className={styles.form} action="" onSubmit={handleSubmit}>
                    <div className={styles.formElement}>
                        <label htmlFor="Email">
                            Email
                            <span>{formErrors.email}</span>
                        </label>
                        <input 
                        type="email" 
                        name="email" 
                        id="" 
                        placeholder='example@gmail.com' 
                        value={details.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formElement}>
                        <label htmlFor="Password">
                            Password
                            <span>{formErrors.password}</span>
                        </label>
                        <input 
                        type="password" 
                        name="password" 
                        id=""
                        placeholder='Your password' 
                        value={details.password} 
                        onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formActions}>
                        <button type='submit'>Continue</button>
                    </div>
                </form>
                {networkErr&&<p className={styles.networkErr}>{networkErr}</p>}
            </div>
            <RightBlock/>
        </Card>
     );
}
 
export default Login;