class SkillsDictionary{
    constructor(skillsArr){
        this.skillsStore = skillsArr
    }
    has(value){
        return this.skillsStore.includes(value, 0)
    }
    add(value){
        if(this.has(value)){
            return;
        }
        else{
            this.skillsStore.push(value)
        }
        return this.skillsStore;
    }
    remove(value){
        this.skillsStore.splice(this.skillsStore.indexOf(value), 1)
        return this.skillsStore;
    }
}
export default SkillsDictionary;