import RightBlock from '../RightBlock/RightBlock';
import Card from '../Card/Card';
import {useState} from 'react'
import styles from './LogIn.module.css'
import axios from 'axios';
import ValidateLogin from '../Validations/ValidateLogin';
const Login = () => {
    const [formErrors, setFormErrors] = useState({})
    const [details, setUserDetails] = useState({
        email: "",
        password: ""
    })
    const api = "http://localhost:9000/posts"
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
        const userLoginDetails = {
            email: details.email,
            password: details.password
        }
        setFormErrors(ValidateLogin(userLoginDetails))
        if(formErrors.all === ""){
            axios.post(api, {userLoginDetails})
            .then(res=>{
                console.log(res)
                console.log(userLoginDetails)
            })
            .catch(err=>console.log(err))
        }
        // if(formErrors){
        //     return;
        // }
        // else{
        //     // const {usersData} = useFetch(api)
        // }
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
                            {formErrors&&<span>{formErrors.email}</span>}   
                        </label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className={formErrors.email ? styles.errorField : ""}
                        placeholder='example@gmail.com' 
                        value={details.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formElement}>
                        <label htmlFor="Password">
                            Password
                            {formErrors&&<span>{formErrors.password}</span>}
                        </label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password"
                        className={formErrors.password ? styles.errorField : ""}
                        placeholder='Your password' 
                        value={details.password} 
                        onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formActions}>
                        <button type='submit'>Continue</button>
                    </div>
                </form>
                {/* {networkErr&&<p className={styles.networkErr}>{networkErr}</p>} */}
            </div>
            <RightBlock/>
        </Card>
     );
}
 
export default Login;