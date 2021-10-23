<template>
  <tr class="todo-item">
    <td class="text-center">
      {{ todo.name }}
    </td>
    <td class="text-center">
      {{ todo.state }}
    </td>
    <td class="text-center">
      <button @click="updateTodo(todo)" class="rounded-md shadow text-white bg-blue-700 px-2 mr-2">
        U
      </button>
      <button @click="deleteTodo(todo)" class="rounded-md shadow text-white bg-red-700 px-2">
        D
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    updateTodo(todo) {
      this.$store.dispatch('todo/setEditTodo', todo)
        .then(() => {
          this.$router.push('/edit');
        })
    },
    deleteTodo(todo) {
      this.$store.dispatch('todo/deleteTodo', todo);
    }
  }
}
</script>

<style scoped>
</style>
