<template lang="pug">
    nav.tabs
        .tabs__container
            ul.tabs__list
                li.tabs__item(
                    v-for="tab in tabs"
                    @click="addActiveClass(tab)"
                    :class="{tabs__item_active : tab.checked}")                  
                    router-link(
                        :to="tab.href"
                       
                    ).route-link {{tab.name}}                   
  
</template>

<script>

export default {

    data(){
        return{
            tabs:[{name:"tab1",href:"/",checked:true},
            {name:"tab2",href:"/works",checked:false},
            {name:"tab3",href:"/blog",checked:false}]
        }
    },
    methods:{
        addActiveClass(tab){
            console.log(tab.checked)
            for(var i=0; i<this.tabs.length;i++){
                this.tabs[i].checked = 0;
            }
             tab.checked=true;   
                return tab.checked;
        }
    }

   

}
</script>

<style lang="scss" src='styles/tab.scss' scoped>

</style>
