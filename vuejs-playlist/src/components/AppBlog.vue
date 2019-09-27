<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="checkboxes">
                <label for="">Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories">
                <label for="">Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories">
                <label for="">Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories">
                <label for="">Winzards</label>
                <input type="checkbox" value="winz" v-model="blog.categories">
            </div>
            <label for="Author"></label>
            <select name="" id="" v-model="blog.author">
                <option v-for="(author, index) in authors" :key="index">{{author}}</option>
            </select>
            <button @click.prevent="addPost" class="btn btn-primary">Add Blog</button>
        </form>
        <div v-if="submitted">
          <h3>Thanks for adding your post</h3>
        </div>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <!-- <span>Categories: {{ blog.categories }}</span> -->
            <p>Blog categories: </p>
            <ul>
                <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
            </ul>
            <p>Blog author: {{blog.author}} </p>
        </div>
    </div>
</template>

<script>
// Imports

export default {
  data() {
    return {
        blog: {
            title: "",
            content: "",
            categories: [],
            author: ""
        },
        authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
        submitted: false,
    };
  },
  methods: {
    addPost(){
      var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
      };
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      },config).then(function(data){
        console.log(data);
        this.submitted = true;
      })
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
