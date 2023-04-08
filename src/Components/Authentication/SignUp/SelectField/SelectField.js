import { useState } from 'react';
import {FaChevronDown} from 'react-icons/fa'
import './SelectField.css'
const SelectField = (props) => {
    const communities = [
        'Frontend Community',
        'Backend Community',
        'Software Development',
        'Game development',
        'Product Management',
        'UI/UX',
        'Graphics Design',
        'Data Science'
]
    const [option, setOption] = useState("")
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        if(!open){
            setOpen(true)
        }
        else{
            setOpen(false)
        }
    }
    return (
            <div className="selectMenu">
                <div className="select-btn" onClick={handleOpen}>
                    <span className='sBtn-text'>{!option?'Select your community':option}</span>
                    <FaChevronDown style={{color: 'rgba(122, 122, 122, 1)', width: '10px'}}/>
                </div>
                {open && <ul className="options">
                    {communities.map(community=>{
                        return(
                            <li key={Math.random()} 
                                onClick={(()=>{
                                    setOption(community);
                                    props.onReceive(community);
                                    setOpen(false)
                                })}>
                                {community}
                             </li>
                        )
                    })}
                </ul>}
            </div>        
     );
}
 
export default SelectField;