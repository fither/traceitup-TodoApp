<template>
  <div v-if="todo">
    <form class="flex gap-2 w-full">
      <input 
        class="flex-1 shadow rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none" 
        type="text" 
        placeholder="Todo Name" 
        name="name" 
        v-model="todo.name" 
        required />
      <select
        class="flex-1 shadow rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none"
        v-model="todo.state"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button @click.prevent="updateTodo()" type="submit" class="rounded-md shadow bg-lbue-700 py-2 px-6">
        Save
      </button>
    </form>
  </div>
  <div v-else>
    No Todo Selected To Update
  </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState({
        'todo': state => state.todo.editTodo || null
      })
    },
    methods: {
      updateTodo() {
        this.$store.dispatch('todo/updateTodo', this.todo)
          .then(() => {
            this.$router.push('/todo');
          });
      }
    }
  }
</script>