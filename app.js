const app = Vue.createApp({
    data() {
        return {
            title: 'Final Empire',
            author: 'Brandon Sanderson',
            age: 54
        }
    },
    methods: {
        changeTitle(bookTitle){
            this.title = bookTitle
        }
    },
    
    // data, functions
    // template: '<h2>I am the template</h2>'
})


app.mount('#app')