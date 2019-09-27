<template>
    <header>
        <h1 @click="changeTitle">{{ title }}</h1>
    </header>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props: {
        title:{
            type: String,
            required: true
        }
    },
    methods:{
        // c1
        // changeTitle: function(){
        //     this.title = "Vue wizards"
        // }

        // c2
        changeTitle: function(){
            this.$emit('changeTitle','Vue wizards, child to parent component!');
        }
    }
}
</script>
<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>
