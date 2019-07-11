<template>
    <header>
        <h1 @click="changeTitle">{{title}}</h1>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    data(){
        return {
            title: 'Vue Ninja'
        }
    },
    methods:{
        changeTitle(){
            // this.title = "Vue Wizards is changed"
            this.$emit('changeTitle','Vue Wizards is changed')
        }
    }    
}
</script>

<style scoped>
    header{
        background: lightgreen;
        padding: 10px
    }
    h1{
        color: #222;
        text-align: center
    }
</style>