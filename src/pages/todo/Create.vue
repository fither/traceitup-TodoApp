<template>
    <form @submit.prevent="createTodo" class="flex gap-2 w-full">
        <input class="flex-1 shadow rounded-md p-2 focus:ring-2 focus:ring-blue-900 focus:outline-none" type="text" placeholder="Todo Name" name="name" v-model="todoName" required/>
        <button type="submit" class="rounded-md shadow text-white bg-blue-700 py-2 px-6">Create</button>
    </form>
</template>

<script>

export default {
    emits: ['create'],
    data() {
        return {
            todoName: ''
        }
    },
    methods: {
        createTodo() {
            this.$emit('create', this.todoName);
            this.todoName = '';
        }
    }
}
</script>

<style scoped>
</style>
