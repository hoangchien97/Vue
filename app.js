new Vue({
    el: "#app",
    data:{
        health: 100,
        ended: false       
    },
    methods: {
        punch: function(){
            this.healtah -= 10
            if(this.health < 0){
                this.ended = true;
            }
        },
        restart: function(){
            this.health = 100,
            this.ended = false
        }
    },
    computed: {
    },
})

