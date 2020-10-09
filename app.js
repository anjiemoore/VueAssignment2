const app = Vue.createApp({
    data() {
        return {
            output: '',
            enteredOutput: ''
        }
    },
    methods: {
        myAlert() {
            alert("Hey, do ya like jazz?");
        },
        keyOutput(event) {
            this.output = event.target.value;
        },
        confirmInput() {
            this.enteredOutput = this.output;
        }
    }
})

app.mount('#assignment')