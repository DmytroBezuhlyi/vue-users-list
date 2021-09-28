import axios from "axios";

export const userModule = {
  state: () => ({
    users: []
  }),
  getters: {
    getUsersList(state) {
      return state.users;
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    // Get data from server
    // =====================

    // Using promises
    // fetchUsers({commit}) {
    //   return axios.get('https://jsonplaceholder.typicode.com/users?_limit=10', {})
    //     .then(response => {
    //       commit('setUsers', [...response.data])
    //     })
    //     .catch((e) => {
    //       console.error(e);
    //     })
    //     .finally(() => {
    //       console.log('Fetched')
    //     });
    // }

    //Using async/await
    async fetchUsers({commit}) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
          _limit: 10
        }
      })
      await commit('setUsers', response.data);
    }
  },
  namespaced: true
}