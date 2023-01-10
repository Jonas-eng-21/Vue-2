new Vue ({
  el: '#app',
  data: {
    titulo: "Cadastro de clientes",
    newUser: {
      name: '',
      email: ''
    },
    users: [],
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        // Atualiza a propriedade `users` com os usuários retornados pela API
        this.users = users
      })
      .catch(error => {
        // Tratar o erro aqui, se necessário
      })
  },
  methods: {
    addUser() {
      // Adiciona o novo usuário à lista de usuários aqui
      this.users.push(this.newUser)
      // Limpa os campos do formulário
      this.newUser = {
        name: '',
        email: ''
      }
    }
  },

})