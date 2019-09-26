<template>
    <div id="ninjas">
        <!-- <p>{{ninjas}}</p> -->
        <ul>
            <li 
                v-for="(ninja,index) in ninjas" 
                v-on:click="ninja.show = !ninja.show" 
                :key="index"
            >
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
        <button @click="deleteNinja">Delete</button>
    </div>
</template>
<script>
export default {
    props:{
        ninjas:{
            type: Array
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        deleteNinja: function(){
            this.ninjas.pop();
        }
    }
}
</script>
<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
