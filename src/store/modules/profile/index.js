import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/mutation-types.js'
// Podemos importar facilmente la función desde el helper 'api', con el alias @
// definido en vite.config.js
import { getUser } from '@/api'

const module = {
  // Habilita los 'espacios de nombres' explicitos,
  // si no se habilita, al importar los modulos en el store
  // principal, al usar alguno de sus elementos (por ejemplo un getter)
  // no debera aclarar a que modulo pertenece para obtener este modulo.
  // Habilitarlo nos permite segmentar de forma explicita las funcionalidades
  // por modulos.
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
    // Actualiza el nombre de usuario en el estado.
    // 'COMMIT_UPDATE_USERNAME' Es la variable que contiene el
    // nombre de la función actualizadora.
    // Esta sintaxis nos permite modificar el nombre de la función tanto
    // en las mutaciones, como en los commits que las invocan. 
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
      // Generamos un número entero entre 1-10
      let randomIdNumber = Math.ceil( Math.random() * 10 )
      // Obtenemos de forma asincrona el usuario.
      const user = await getUser(randomIdNumber)
      console.log(user)
      // Usamos commit para invocar mutations.
      // Usamos dispatch para las acciones (debido a que son asincronas)
      // Actualizamos el nombre de usuario en base al usuario obtenido.
      // Notar que usamos 'COMMIT_UPDATE_USERNAME' en lugar de un string,
      // Para tener los nombres centralizados en un archivo depurable.
      commit(COMMIT_UPDATE_USERNAME, user.username)
      if (state.username) {
        // El tercer argumento es para que la mutación o acción,
        // pueda acceder al rootState, es decir al modulo global.
        // Recordar que 'COMMIT_SET_STATUS' como mutación esta definida
        // en el modulo global, no en el local (no en 'profile')
        commit(COMMIT_SET_STATUS, 'active', { root: true })
        // rootState accede al estado de todos los modulos,
        // esto nos permite acceder a datos del estado de otros modulos.
        // state es 'local', es el state de este modulo.
        console.log('status', rootState.status)
      }
    }
  },
}

export default module