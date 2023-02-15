// Exporta una asincrona función que retorna un usuario en formato json,
// En base a un ID dado.
// Recordar que todo esto es Vainilla JS, no es necesario de Vue o Vuex. 
// La URL usada pertenece a una Free Fake API para testeo y prototipado.
export const getUser = async (userId) => {
  const res = (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()
  return res;
}
