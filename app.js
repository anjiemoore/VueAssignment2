const app = Vue.createApp({
    data() {
        return {
            output: ''
        }
    },
    methods: {
        myAlert() {
            alert("Hey, do ya like jazz?");
        },
        keyOutput(event) {
            this.output = event.target.value;
        }
    }
})

app.mount('#assignment')