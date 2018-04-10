<template lang="pug">
    .skill-input
        input.admin__input.admin__input--addskill(type="text" 
            v-model="skillName" 
            @keydown.enter="addNewSkill" 
            :class="{error : validation.hasError('skillName')}")
        button.form__button.form__button--admininput(type="button" @click="addNewSkill") Добавить
        .error-message {{validation.firstError('skillName')}} 
        
        
</template>

<script>

import {mapMutations} from 'vuex'
import {Validator} from 'simple-vue-validator'
import config from '../../../config';

export default {

    mixins: [require('simple-vue-validator').mixin],

    props:{
        type: Number
    },
    data(){
        return{
            skillName:""
        }       
    },
    validators:{
        skillName:(value =>{
            return Validator.value(value).required('Название не может быть пустым!')
        })
    },
    methods:{
        ...mapMutations(['addSkill']),
        addNewSkill(){
            const newSkill= {
                id: Math.random(Math.random()*100000),
                name:this.skillName,
                percents:0,
                type:this.type                
            }
           
            this.$validate().then(success => {
                if (!success) return;
                this.addSkill(newSkill);
                this.skillName = "";
                this.validation.reset();
            });

        }
    }
}
</script>

<style lang="scss" src="styles/content.scss" scoped>


</style>
