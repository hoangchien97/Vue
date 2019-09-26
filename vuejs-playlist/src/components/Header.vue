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
            type: String
        }
    },
    methods:{
        changeTitle: function(){
            this.title = "Vue wizards"
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
