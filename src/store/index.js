import { createStore } from 'vuex'
// Importamos los modulos por componentes.
import profile from '@/store/modules/profile'
import channels from '@/store/modules/channels'
import messages from '@/store/modules/messages'
import contacts from '@/store/modules/contacts'
import { COMMIT_SET_STATUS } from '@/common/mutation-types.js'


// Crea un nuevo 'store' para Vuex.
// Recordar que Vuex nos permite comunicar estados globales.
// https://vuex.vuejs.org/api/#store-constructor-options
const store = createStore({
  // Estado raíz del 'store'
  state() {
    return {
      status: null
    }
  },
  // Los getters prácticamente vienen siendo lo mismo que 
  // las propiedades computadas de Vue.js,
  // con la diferencia que no pertenecen a un componente como tal, 
  // sino al manejo de estado.
  getters: {},
  // Las mutaciones son síncronas,
  // esta es su diferencia principal con las actions.
  mutations: {
    [COMMIT_SET_STATUS](state, value) {
      state.status = value
    }
  },
  actions: {},
  // Para modularizar el store,
  // por componentes.
  modules: {
    profile,
    channels,
    messages,
    contacts
  }
})

export default store