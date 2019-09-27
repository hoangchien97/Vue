<template>
    <div>
        <!-- <app-blog/> -->
        <list-blog/>
    </div>
</template>

<script>
// Imports
import AppBlog from './components/AppBlog.vue';
import ListBlog from './components/ListBlog';
export default {
    components: {
        AppBlog,
        ListBlog
    },
    data () {
        return {
        }
    },
    methods:{

    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
