<template lang="pug">
    li.adminSkills__item
        .adminSkills__item-info {{skill.name}}
        .adminskills__percent-wrapper
            input.adminSkills__input(v-model="skill.percents" type="text", placeholder="50")
            .adminSkills__item-percent='%'
            .btnDel(@click="removeItem(skill._id)")
  
</template>

<script>

import {mapMutations} from 'vuex'
import config from '../../../config';

export default {

    props:{
        skill:Object
    },
    methods:{
        ...mapMutations(['removeSkill']),
        removeItem(skillId){
            this.removeSkill(skillId)

            this.axios({
                method: 'delete',
                url: config.server+'/api/about/'+skillId               
                  
        })
        }
    }

}
</script>

<style lang="scss" src="styles/content.scss" scoped>

</style>
