const store = {
  profile: {
    username: ''
  },
  // Dividimos en contactos, mensajes y canales
  // para normalizar, haciendo los datos extraidos,
  // lo más sencillos posibles, y evitando los datos
  // repetidos y las modificaciones excesivas,
  // quitandole profundidad a los objetos.
  contacts: [
    { 
      id: 1,
      username: 'User 3'
    },
    {
      id: 2,
      username: 'User 2'
    }
  ],
  messages: [
    {
      id: 1,
      msg: 'Hola :D',
      author: 1
    },
    {
      id: 2,
      msg: 'Hola :D',
      author: 2
    },
    {
      id: 3,
      msg: 'Hola :D',
      author: 1
    },
    {
      id: 4,
      msg: 'Hola :D',
      author: 2
    }
  ],
  channels: [
    {
      id: 1,
      name: 'Canal 1',
      messages: [1,2]
    }, 
    {
      id: 2,
      name: 'Canal 2',
      messages: [3,4]
    }
  ]
}
