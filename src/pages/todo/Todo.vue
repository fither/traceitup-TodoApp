<template>
  <create @create="todoCreated"/>
  <list :todos="todos"/>
</template>
<script>
  import Create from './Create.vue';
  import List from './List.vue';
  import {mapState} from "vuex";

  export default {
    components: {Create, List},
    computed: {
      ...mapState({
        'todos': state => state.todo.todos
      })
    },
    methods: {
      async todoCreated(item) {
        await this.$store.dispatch('todo/createTodo', item);
      }
    },
    async created() {
      await this.$store.dispatch('todo/fetchTodos');
    }
  }
</script>

<style scoped>
</style>