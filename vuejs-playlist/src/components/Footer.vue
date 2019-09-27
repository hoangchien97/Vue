<template>
    <footer>
        <h2>{{title}}</h2>
        <p>{{ copyright }}</p>
    </footer>
</template>
<script>
import { eventBus } from './../main.js'
export default {
    props:{
        copyright: {
            type: String
        },
        title:{
            type: String
        }
    },
    data(){
        return{
            
        }
    },
    created(){
        eventBus.$on('titleChanged',(data)=>{
            this.title = data;
        })
    }
    
}
</script>
<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
        color: lightgreen;
        text-align: center;
}
</style>
