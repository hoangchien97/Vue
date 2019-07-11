<template>
    <div>
        <h1>List of Ninja</h1>
        <ul>
            <li v-for="(ninja,index) in ninjas">{{index}} - {{ ninja }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
          ninjas: ['Yoshi', 'Mario', 'Ryu']
        }
    }
}
</script>

<style>
    h1{
        color: purple
    }
</style>
