<template>
  <table class="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>State</th>
        <th>Actions</th>
      </tr>
    </thead>
    <!-- <tbody>
      <TodoItem draggable="true" v-for="todo in todos" :key="todo.id" :todo="todo" />
    </tbody> -->
    <draggable 
      :list="todos" 
      item-key="id"
      tag="tbody" 
      :sort="true"
    >
      <template #item="{element}">
        <TodoItem class="todo-item" :todo="element" />
      </template>
    </draggable>
  </table>
</template>

<script>
import TodoItem from './TodoItem.vue';
import draggable from 'vuedraggable';
export default {
  components: { draggable, TodoItem},
  props: ['todos']
}
</script>

<style scoped>
  tbody tr {
    border-bottom: .1rem solid #cecece;
  }
</style>
