import { useState } from 'react';
import SkillsDictionary from './SkillsDictionary/SkillsDictionary';
import styles from './SearchField.module.css'
const SearchField = (props) => {
    const searchList = [
        'HTML',
        'CSS',
        'Bootstrap',
        'Figma',
        'Corel Draw',
        'Photohop',
        'Node.js',
        'React',
        'Python',
        'Django',
        'Angular',
        'Vue',
        'Flutter', 
        'Sass',
        'JavaScript',
        'JAVA'
    ]
    const [skills, setSkills] = useState([])
    const mySkills = new SkillsDictionary(skills)
    const [searchParameter, setSearchParameter] = useState("")
    const handleChange = (e) => {
        setSearchParameter(e.target.value)
    }
    
    const handleClick = (item) => {
        setSkills(mySkills.add(item))
        props.onReceive(skills)
        setSearchParameter("")
    }
    return ( 
        <div className={styles.searchField}>
            <input 
                type="text" 
                placeholder="Type to search..." 
                name="skills" 
                id="" 
                className={props.error ? styles.errorField : ''}
                value={searchParameter}
                onChange={handleChange}
            />

            {searchParameter&&
                <ul className={styles.searchList}>
                    {searchList.filter(item=>{
                        const searchTerm = searchParameter.toLowerCase()
                        const skill = item.toLowerCase()
                        return searchTerm && skill.startsWith(searchTerm)
                    }).map(item=>{
                        return(
                            <li 
                                key={Math.random()} 
                                onClick={()=>handleClick(item)}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
     );
}
 
export default SearchField;