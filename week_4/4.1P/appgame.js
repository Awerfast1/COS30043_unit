const app = Vue.createApp({
        data() {
          return {
                Random_Number: 0,
                User_Number: 0,
                guess_message: ""
            };
        }, 
        mounted() {
        this.generateRandomNumber(); // call your method here
        },

        methods: {
            guess() {
                if (this.User_Number === this.Random_Number) {
                    this.guess_message = "Congratulations! You guessed the number!";
                } else if (this.User_Number < this.Random_Number) {
                    this.guess_message = "Your guess is too low. Try again!";
                } else if (this.User_Number > this.Random_Number) {
                    this.guess_message = "Your guess is too high. Try again!";
                }
            },
            generateRandomNumber() {
                this.Random_Number = Math.floor(Math.random() * 100) + 1;
            },
            startOver() {
                this.User_Number = 0;
                this.guess_message = "";
                this.generateRandomNumber(); // resets with a new number
            },
            giveUp() {
                this.guess_message = `The number was ${this.Random_Number}. Better luck next time!`;
                this.User_Number = 0; // reset user input
            }
        },

        computed: {
            
        }
      }).mount("#app");