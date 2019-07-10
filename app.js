new Vue({
    el: "#app",
    data: {
        name: "chien",
        job: "dev",
        website : 'http://www.facebook.com',
        websiteTag : '<a href="https://www.fb.com/hdchien97">Chien Hoang</a>'
    },
    methods: {
        greet: function(time) {
            return "Good " + time + ' ' + this.name;
        }
    }
})