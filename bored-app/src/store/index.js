import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: [],
  },
  mutations: {
    addActivity(state, activity) {
      state.activities.push(activity);
      localStorage.setItem('activities', JSON.stringify(state.activities));
    },

    deleteActivity(state, activity) {
      state.activities = state.activities.filter((val) => val.id !== activity.id);
      localStorage.setItem('activities', JSON.stringify(state.activities));
    },
    deleteAllActivites(state){
      state.activities = [];
      localStorage.setItem('activities', JSON.stringify(state.activities));
    }
  },
  actions: {
    addActivity({commit}, activity) {
      commit('addActivity', activity)
    },

    deleteActivity({commit}, activity) {
      commit('deleteActivity', activity)
    },
    deleteAllActivites({commit}) {
      commit('deleteAllActivites')
    }
  },
  getters: {
    getActivities(state) {
      const activities = JSON.parse(localStorage.getItem('activities'));
      if (activities && activities.length > 0) {
        state.activities = activities;
      }
  
      return state.activities;
    }
  },
  modules: {
  },
});
