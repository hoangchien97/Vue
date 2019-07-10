new Vue({
    el: "#app",
    data:{
        age:23,
        x: 0,
        y: 0
    },
    methods: {
        add: function(increment){
            this.age += increment;
        },
        subtract: function(decrement){
            this.age -= decrement;
        },
        updateXY:function(event){
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY
        }
    },
})