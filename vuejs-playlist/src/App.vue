<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
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

    }
  }    
}
</script>

<style scoped>
  h1{
    color: green
  }
</style>