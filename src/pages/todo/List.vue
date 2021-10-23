<template>
  <table class="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>State</th>
        <th>Actions</th>
      </tr>
    </thead>
    <draggable 
      :list="todos" 
      item-key="id"
      tag="tbody" 
      :sort="true"
    >
      <template #item="{element}">
        <todo-item :todo="element"></todo-item>
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
</style>
