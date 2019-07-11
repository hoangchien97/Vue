var data = {
    name : 'Yoshi'
}

Vue.component('greeting', {
    template: '<p>Hey there, I am {{name}}<button @click="changeName">Change name</button></p>',
    data:function(){
        return data
    },
    methods: {
        changeName : function(){
            this.name = 'Mario'
        }
    },
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});