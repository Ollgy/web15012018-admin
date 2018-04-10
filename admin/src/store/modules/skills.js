import config from '../../../../config';

const skills = {
    state:{
        data:[]
    },
    getters:{
        skills(state){
            //console.log(state.data)
            return state.data;
            
        }
    },
    mutations:{
        addSkill(state,skill){
            state.data.push(skill)
        },
        removeSkill(state,skillId){
            state.data = state.data.filter(item => item._id !== skillId);                        
        }
    },
    actions:{
        fetchSkills({state}){

            fetch(config.server+"/api/about").then(data =>{
                return data.json()
            }).then(responce =>{
                state.data = responce.skills;
                console.log(responce+"axios");
            })      
        }
    }
}

export default skills