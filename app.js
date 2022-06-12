const app = Vue.createApp({
    data(){
        return {
            content : "Be the harderst Worker in the room.",
            author : "Rock",
        }
    },
    methods:{
        async getQuote(){
            const res = await fetch("https://api.quotable.io/random")
            const results = await res.json()

            this.content = results.content
            this.author = results.author
        }
    }
})

app.mount("#app")