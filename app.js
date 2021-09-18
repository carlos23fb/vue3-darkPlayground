const app = Vue.createApp({
    data() {
        return {
            show: true,
            title: 'Final Empire',
            author: 'Brandon Sanderson',
            age: 54,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(bookTitle){
            this.title = bookTitle
        },
        toogleBook(){
            this.show = true ? !this.show : this.show
        },
        handleEvent($event){
            console.log(`eje y: ${event.y} eje x: ${event.x}`)
        },
        handleMouseMove(event){
            this.y = event.y
            this.x = event.x
            console.log(this.x, this.y)
        }
    },
    
    // data, functions
    // template: '<h2>I am the template</h2>'
})


app.mount('#app')