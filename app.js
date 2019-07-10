new Vue({
    el: "#app",
    data: {
        name: "chien",
        job: "dev",
        website : 'facebook.com'
    },
    methods: {
        greet: function(time) {
            return "Good " + time + ' ' + this.name;
        }
    }
})