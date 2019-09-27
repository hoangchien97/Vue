<template>
  <div id="list-blog">
        <h1 >All Blog Articles</h1>
        <div class="form-group">
          <input type="text" class="form-control" v-model="search" name="" id="" placeholder="search blog">
        </div>
        <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
            <h2>{{ blog.title | to-uppercase }}</h2>
            <article>{{ blog.body }}</article>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(90,100);
        });
    },
    computed: {
        filteredBlogs(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);  
            })
        }
    },
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