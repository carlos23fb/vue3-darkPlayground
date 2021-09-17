const app = Vue.createApp({
    data() {
        return {
            show: true,
            title: 'Final Empire',
            author: 'Brandon Sanderson',
            age: 54
        }
    },
    methods: {
        changeTitle(bookTitle){
            this.title = bookTitle
        },
        toogleBook(){
            this.show = true ? !this.show : this.show
        }
    },
    
    // data, functions
    // template: '<h2>I am the template</h2>'
})


app.mount('#app')