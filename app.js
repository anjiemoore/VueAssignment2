const app = Vue.createApp({
    data() {
        return {
            output: '',
            secondOutput: '',
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
        secondKeyOutput(event) {
            this.secondOutput = event.target.value;
        },
        confirmInput() {
            this.enteredOutput = this.secondOutput
        }
    }
})

app.mount('#assignment')