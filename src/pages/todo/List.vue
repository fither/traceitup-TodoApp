<template>
    <div class=" divide-y divide-gray-300">
        <todo-item v-for="todo in todos" :todo="todo"/>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    components: {TodoItem},
    props: ['todos'],
}
</script>

<style scoped>
</style>
