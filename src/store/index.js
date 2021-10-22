import { createStore } from 'vuex';
import axios from 'axios';

const state = {
    todos: []
};

export const actions = {
    createTodo({ state }, todo) {
        axios.post('todos', {name: todo})
            .then(() => state.todos.unshift(todo))
            .catch(e => console.error(e));
    },
    fetchTodos({ state }) {
        axios.get('todos')
            .then(response => {
                state.todos = response.data;
            })
            .catch(e => console.error('failed to fetch todos', e));
    }
};

export default createStore({
    state,
    actions,
})
