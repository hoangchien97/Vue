<template>
    <div>
        <keep-alive>
            <component :is="currentTabComponent"></component>
        </keep-alive>
        <button @click="currentTabComponent = 'form-one'">Show form one</button>
        <button @click="currentTabComponent = 'form-two'">Show form two</button>
    </div>
</template>

<script>
// Imports
import FormOne from './components/FormOne.vue';
import FormTwo from './components/FormTwo.vue';
import FormHelper from './components/FormHelper.vue';

export default {
    components: {
        FormOne,
        FormTwo,
        FormHelper
    },
    data () {
        return {
            currentTabComponent: 'form-one'
        }
    },
    methods:{

    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
