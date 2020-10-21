var app = new Vue({
    el: '#app',
    data: {
        todos: [{
            'text':'数字逻辑设计',
            'checked': false,
         },{
             'text': '数值分析',
             'checked': false,
         },{
             'text': '微信小程序综合实践',
             'checked': true,
         }],
        inputText: "",
    },
    methods: {
        addTask: function(event) {
            if(this.inputText != "") {
                this.todos.push({
                    'text':this.inputText, 
                    'checked':false
                });
                this.inputText = "";
           }
        }
    }
})