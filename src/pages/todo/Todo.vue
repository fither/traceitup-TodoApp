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
        ...mapState(['todos'])
    },
    methods: {
        todoCreated(item) {
            this.$store.dispatch('createTodo', item);
        }
    },
    created() {
        this.$store.dispatch('fetchTodos');
    } 
}

</script>

<style scoped>
</style>
