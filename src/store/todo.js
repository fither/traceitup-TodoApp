import axios from 'axios';

// interface todo {
//   id: number,
//   name: string,
//   state: string
// }

export default {
  namespaced: true,
  state: {
    todos: [],
    editTodo: null
  },
  actions: {
    async createTodo({ state }, name) {
      await axios.post('todos', {name})
        .then(() => {
          let id = 0;
          if(state.todos.length) { 
            state.todos.map((t) => id = t.id > id ? t.id : id)
          }
          id+=1;
          const todo = {
            id,
            name,
            state: 'Pending'
          };

          todo.id = id;
          state.todos.push(todo);
        })
        .catch(e => console.error(e));
    },
    async fetchTodos({ state }) {
      if(!state.todos.length) {
        await axios.get('todos')
          .then(response => state.todos = response.data)
          .catch(e => console.log('failed to fetch todos', e));
      }
    },
    async updateTodo({ state }, todo) {
      await axios.put(
        'todos', 
        todo, {
          params: {
            id: todo.id
          }
        })
        .then(() => {
          const item = state.todos.find(t => t.id === todo.id);
          const index = state.todos.indexOf(item);
          if(index !== -1) {
            state.todos[index] = todo;
          }
        })
        .catch(e => console.error('failed to update todo', e));
    },
    async deleteTodo({ state }, todo) {
      await axios.delete('todos', {
        params: { id: todo.id }
      })
        .then(() => {
          const index = state.todos.indexOf(todo);
          if(index !== -1) {
            state.todos.splice(index, 1);
          }
        })
        .catch(e => console.error('failed to delete todo', e));
    },
    async setEditTodo({ state }, todo) {
      state.editTodo = todo;
    }
  }
}