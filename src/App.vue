<template>
    <navbar/>
    <div class="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    components: {Navbar},
    data() {
        return {
            title: 'Speed Tail'
        }
    },
    watch: {
        $route(to, from) {
            document.title = `${to.name} - ${this.title}`;
        }
    },
    created() {
        document.title = this.title;
    }
};
</script>
