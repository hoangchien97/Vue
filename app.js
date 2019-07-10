// Một phương thức có thể trả về một giá trị hoặc cũng có thể không, 
// phương thức có thể nhận tham số đầu vào và xử lý. 
// Phương thức sẽ được gọi mỗi khi component được render 

//  computed giúp cho các component được gọi điều tương tự nhiều lần

/*
    Sự khác nhau 
    <template>
    <div class="my-component">
        <div>{{ reverseMessage }}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'this is text'
            }
        },
        computed: {
            reverseMessage() {
                return this.message.split('').reverse().join('')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-component {
        color: red;
    }
</style>

Điều gì xảy ra nếu các ở trong cặp dấu {{ }} ở template các bạn viết là reverseMessage() thay vì reverseMessage,
khi đó lúc chạy ở console sẽ báo lỗi _vm.reverseMessage is not a function.
Từ đây mình muốn rút ra cho các bạn một số điểm khác biệt giữa computed và methods:


    - Khi gọi computed -> ta không được thêm () vào đằng sau
    - Có nghĩa là computed không nhận tham số đầu vào như methods
    - computed chỉ nên dùng với dữ liệu có sẵn trong data

    - computed chỉ tính toán lại mỗi khi các biến phụ trong nó thay đổi
    - methods tính toán lại bất cứ khi nào nó được gọi
    => tận dụng computed tính toán các dữ liệu có sẵn sẽ cải thiện đc performance
*/ 

new Vue({
    el: "#app",
    data:{
        available: true,
        nearby : true
    },
    methods: {
    },
    computed: {
        compClasses:function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    },
})