<template lang="pug">
  section(id="app").section.section--admin
    .section__bkg
      .section__bkg-texture
    appheader
    tabs
    router-view    
      
</template>

<script>

import header from './components/header.vue'
import tabs from './components/tabs.vue'
import about from './components/about.vue'


export default {

  components:{
    appheader:header,
    tabs,
    about
  }
  
}
</script>

<style lang="scss" src="styles/../layout/base.scss">


</style>
