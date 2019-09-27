<template>
  <div id="list-blog" v-theme="'wide'">
        <h1 >All Blog Articles</h1>
        <div v-for="(blog, index) in blogs" :key="index" class="single-blog">
            <h2 v-rainbow>{{ blog.title }}</h2>
            <article>{{ blog.body }}</article>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            blogs: []
        }
    },
    methods: {

    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(90,100);
        });
    }
}
</script>

<style scopped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>