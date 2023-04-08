import React, { useState } from "react";
import RightBlock from "../RightBlock/RightBlock";
import Card from "../Card/Card";
import styles from './SignUp.module.css'
import SelectField from "./SelectField/SelectField";
import SearchField from "./SearchField/SearchField";
import CommunityChoice from "./Choice/CommunityChoice/CommunityChoice";
import SkillsChoice from "./Choice/SkillsChoice/SkillsChoice";
import UseAxios from "../UseAxios/UseAxios";
const SignUp = () => {
    const api = ""
    // const [networkErr, setNetworkErr] = useState("")
    const [skills, setSkills] = useState(null)
    const [community, setCommunity] = useState("")
    const [userSignUpDetails, setUserSignUpDetails] = useState({
        firstname: "",
        lastname: "",
        email:"",
        password: "",
        community: "",
        skills : []
    })
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
        if(skills === null){
            setSkills(entry)
        }
        console.log(entry)
        // console.log(skills)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validateDetails()
        UseAxios(api, {userSignUpDetails})
    }
    const validateDetails = () => {

    }
    return ( 
        <Card>
            <div className={styles.leftBlock}>
                <div className={styles.intro}>
                    <h2 className={styles.h2}>Create an account</h2>
                    <p className={styles.p}>You have an account already? <span><a className={styles.a} href="">Log In</a></span></p>
                </div>
                <form className={styles.form} action="" onSubmit={handleSubmit}>
                    <div className={styles.formBlock}>
                        <div className={styles.formElement}>
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text"
                                name="firstname"
                                id="firstname"
                                value={details.firstname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text"
                                name="lastname"
                                id="lastname"
                                value={details.lastname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.formElement}>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            name="email"
                            id="email"
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
                            placeholder="Your Password"
                            value={details.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formBlock}>
                        <div className={styles.formElement}>
                            <label htmlFor="community">Community</label>
                            <SelectField onReceive={handleCommunity}/>
                        </div>
                        <div className={styles.formElement}>
                            <label htmlFor="select">Select Skills</label>
                            <SearchField onReceive={handleSkills}/>
                        </div>
                    </div>
                    <div className={styles.choiceBlock}>
                        {community && <CommunityChoice community = {community}/>}
                        {skills && <SkillsChoice skills = {skills}/>}
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