<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-content v-bind:ninjas="ninjas"></app-content>
    <hr>
    <app-content v-bind:ninjas="ninjas"></app-content>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// Root components import cac component con khac

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

export default {
  components:{
    // component_name : Component
    'app-header': Header,
    'app-footer': Footer,
    'app-content' : Content
  },
  data(){
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
      title: "Vue Ninjas"
    }
  }    
}
</script>

<style scoped>
  h1{
    color: green
  }
</style>