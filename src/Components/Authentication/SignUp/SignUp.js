import React, { useState } from "react";
import RightBlock from "../RightBlock/RightBlock";
import Card from "../Card/Card";
import axios from "axios";
import styles from './SignUp.module.css'
import SelectField from "./SelectField/SelectField";
import SearchField from "./SearchField/SearchField";
import CommunityChoice from "./Choice/CommunityChoice/CommunityChoice";
import SkillsChoice from "./Choice/SkillsChoice/SkillsChoice";
import ValidateSignUp from "../Validations/ValidateSignUp";
const SignUp = () => {
    const api = "http://localhost:9000/posts"
    const [formErrors, setFormErrors] = useState({
        all: ""
    })
    const [skills, setSkills] = useState([])
    const [community, setCommunity] = useState("")
    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password:"",
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails(prev=>{
            return(
                {...prev, [name]: value}
            )
        })
    }
    const handleCommunity = (entry) => {
        setCommunity(entry)
    }
    const handleSkills = (entry) => {
        setSkills([...entry])
    }
    const handleSubmit = async (e) => {
        const userSignUpDetails = {
            firstname: details.firstname,
            lastname: details.lastname,
            email: details.email,
            password: details.password,
            community: community,
            skills: skills
        }     
        let entries = Object.values(details)
        setFormErrors(ValidateSignUp(userSignUpDetails))
        if(entries.every(entry=>{
            return entry !== ""
        }) && community !== "" && skills.length > 0){
            await axios.post(api,{userSignUpDetails})
            .then(res=>{
                console.log(res)
                console.log(userSignUpDetails)
            })
            .catch(err=>console.log(err))
        }
        else{
            e.preventDefault()
        }
    }
    
    return ( 
        <Card>
            <div className={styles.leftBlock}>
                <div className={styles.intro}>
                    <div className={styles.topBlock}>
                        <h2 className={styles.h2}>Create an account</h2>
                        <p className={styles.p}>You have an account already? <span><a className={styles.a} href="">Log In</a></span></p>
                    </div>
                    {formErrors && <small className={styles.error}>{formErrors.all}</small>}
                </div>
                <form className={styles.form} action="" onSubmit={handleSubmit}>
                    <div className={styles.formBlock}>
                        <div className={styles.formElement}>
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text"
                                name="firstname"
                                id="firstname"
                                className = {formErrors.firstname? styles.errorField : ''}
                                value={details.firstname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text"
                                name="lastname"
                                id="lastname"
                                className = {formErrors.lastname ? styles.errorField : ''}
                                value={details.lastname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.formElement}>
                        <label htmlFor="email">
                            Email
                            {formErrors&& <small className={styles.mailError}>{formErrors.email === "" ? "": formErrors.email}</small>}
                        </label>
                        <input type="email"
                            name="email"
                            id="email"
                            className = {formErrors.email === "" || formErrors.email ? styles.errorField : ''}
                            placeholder="example@example.com"
                            value={details.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formElement}>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            name="password"
                            id="password"
                            autoComplete="on"
                            className = {formErrors.password? styles.errorField : ''}
                            placeholder="Your Password"
                            value={details.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formBlock}>
                        <div className={styles.formElement}>
                            <label htmlFor="community">Community</label>
                            <SelectField onReceive={handleCommunity} error={formErrors.community}/>
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="select">Select Skills</label>
                            <SearchField skills={skills} setSkills={setSkills} onReceive={handleSkills} error={formErrors.skills}/>
                        </div>
                    </div>
                    <div className={styles.choiceBlock}>
                        {community !== "" && <CommunityChoice community = {community} setCommunity = {setCommunity}/>}
                        {skills && <SkillsChoice skills = {skills} setSkills = {setSkills} />}
                    </div>
                    <div className={styles.formActions}>
                        <button type="submit">Create Account</button>
                    </div>
                </form>
            </div>
            <RightBlock/>
        </Card>
     );
}
export default SignUp;