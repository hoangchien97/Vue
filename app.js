var vm1 = new Vue({
    el: "#app1",
    data:{
          title: "Vue App One" 
    },
    methods: {
        
    },
    computed: {
        greet: function(){
            return 'Hello from app one'
        }
    },
})

var vm2 = new Vue({
    el: "#app2",
    data:{
        title : "Vue App Two"
    },
    methods: {
        changTitle: function(){
            vm1.title = "Title changed";
        }
    },
    computed: {
        greet: function(){
            return 'Yo dudes, this is app 2 speaking to ya :)'
        }
    },
})

