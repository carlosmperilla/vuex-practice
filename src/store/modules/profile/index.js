import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
  namespaced: true,
  state() {
    return {
      id: 1,
      username: 'Undefined',
      details: {
        id: 1,
        name: 'Usuario Actual',
        avatar: '/avatars/avatar.jpg'
      }
    }
  },
  getters: {
    // Accedemos al 'state', en lugar del this
    // por vuex.
    // Devolvemos una función para darle dinamismo
    // a la representación.
    firstName: (state) => (c) => {
      return state.username.split('').join(c)
    }
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username
    }
  },
  actions: {
    // A la 'action' se le puede pasar un contexto.
    // De este contexto podemos extraer objetos especificos,
    // Como se ve en el primer parametro.
    async updateUsername({ commit, state, rootState }, username) {
      // Observamos el nombre de usuario en el estado vs el nombre ingresado.
      console.log('update username action!', state.username, username)
      const user = await getUser(1)
      console.log(user)
      // Usamos commit para invocar mutations.
      // Usamos dispatch para las acciones (debido a que son asincronas)
      commit(COMMIT_UPDATE_USERNAME, user.username)
      if (state.username) {
        commit(COMMIT_SET_STATUS, 'active', { root: true })
        console.log('status', rootState.status)
      }
    }
  },
}

export default module