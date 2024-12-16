import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import './uni.promisify.adaptor'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
	  name:'刘金宇',
    baseData: { count:0 },
  },
  mutations: {
    increment(state) {
      state.baseData.count++;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    }
  },
  getters: {
    baseData: state => state.baseData
  }
});


const app = new Vue({
  ...App,
  store
})
app.$mount()
