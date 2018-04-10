import Vue from 'vue'
import Vuex from 'vuex'
import skills from './modules/skills'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{skills}
});


export default store;