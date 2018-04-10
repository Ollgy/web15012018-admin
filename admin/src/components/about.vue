<template lang="pug">

    .admin__block.adminabout    
        .admin__title-wrapper
            .admin__title Страница "Обо мне"
        form.adminabout__form
            ul.adminabout__list
                skillsList(
                    
                    v-for="skillType in skillsTypes"
                    :key="skillType"
                    :skillType="skillType"
                    :skills= "skills"
                )          
            .admin__button
                button.form__button.form__button--admin(type="button",  id="submit" @click="sendSkills") Сохранить
    
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import skillsList from "./skillsList.vue"
import config from '../../../config';

export default {

    components:{
        skillsList
    },
    data(){
        return{
            //skills:[], Убираем, т.к. послк подключения через mapGetters они лежат в хранилище
            skillsTypes:['Frontend','Backend','Workflow'],      
        }        
    },
    mounted(){
        this.fetchSkills()
    },
    computed:{
        ...mapGetters(['skills'])
    },
    methods:{
        ...mapActions(['fetchSkills']),
    

        sendSkills: function() {

            for(var i=0; i<this.skills.length;i++){
                if(this.skills[i]._id){
                    this.axios({
                        method: 'delete',
                        url: config.server+'/api/about/'+this.skills[i]._id
                    })
                }                

                this.axios({
                    method: 'post',
                    url: config.server+'/api/about',
                    data: {
                        id: this.skills[i].id,
                        name: this.skills[i].name,
                        type: this.skills[i].type,
                        percents: this.skills[i].percents
                    }
                })
            }          
            
        }  
    
    } 
}
</script>

<style lang="scss" src="styles/content.scss" scoped>

</style>
