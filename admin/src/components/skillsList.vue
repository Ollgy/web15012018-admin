<template lang="pug">     
    
        li.adminabout__item
            .adminSkills__title {{skillType}}
            ul.adminSkills__list
                skillsItem(
                    v-for="skill in skills"
                    v-if="checkedSkillType(skillType) === skill.type"
                    :key="skill._id"
                    :skill = "skill"
                ) 
            skillsInput(
                :type = "checkedSkillType(skillType)"
            )
                    
</template>

<script>

import skillsItem from "./skillsItem.vue"
import skillsInput from "./skillsInput.vue"

export default {

    components:{
        skillsItem,
        skillsInput
    },
    props:{
        skillType:String,
        skills:Array
    },
    methods: {
        checkedSkillType(skillGroupName){
            switch(skillGroupName){
                case 'Frontend':
                    return 1;
                case 'Backend':
                    return 2;
                case 'Workflow':
                    return 3;
            }
        }
    }  

}
</script>

<style lang="scss" src="styles/content.scss" scoped>

</style>
