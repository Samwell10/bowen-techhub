class SkillsDictionary{
    constructor(skillsArr){
        this.skillsStore = skillsArr;
    }
    add(value){
        for(var i = 0; i < this.skillsStore.length; i++){
            if(this.skillsStore[i] === value){
                return this.skillsStore;
            }
        }
        this.skillsStore.push(value);
        return this.skillsStore;
    }
    remove(value){
        this.skillsStore = this.skillsStore.filter((skill)=>{
            return skill !== value;
        })
        return this.skillsStore;
    }
}
export default SkillsDictionary;