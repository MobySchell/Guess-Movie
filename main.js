let movies = [
    {
        title: "Harry Potter",
        explanation: "This movie is about a dude with a stick...",
        hint: "It's Magic",
    },
    {
        title: "Just Go With It",
        explanation: "This movie is about people who go on holiday...",
        hint: "Adam, Drew and Jennifer",
    },
    {
        title: "Never Back Down",
        explanation:
            "This movie is about two guys with daddy issues who beat each other up...",
        hint: "Kanye West - Stronger",
    },
    {
        title: "Spongebob Squarepants",
        explanation: "This movie is about a rectangle...",
        hint: "It's a cartoon",
    },
    {
        title: "50 First Dates",
        explanation: "This movie is about a chick, she has the worst memory...",
        hint: "50 times...",
    },
    {
        title: "Cars",
        explanation: "In this movie, car go fast...",
        hint: "Kachow",
    },
    {
        title: "Spiderman",
        explanation:
            "In this movie this guy just does not pay his rent, no matter how many times the landlord asks...",
        hint: "Peta-Paka",
    },
    {
        title: "The Wolf Of Wall Street",
        explanation:
            "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
        hint: "HAWOOooooooooooo",
    },
    {
        title: "Inception",
        explanation: "In this movie everyone is like sleeping all the time...",
        hint: "Dreams...",
    },
    {
        title: "Peter Pan",
        explanation:
            "In this movie some kids die and an angel escorts them to heaven...",
        hint: "Always flying, cuz he neverlands",
    },
    {
        title: "The Lord Of The Rings",
        explanation: "In this movie some small guys go for a walk...",
        hint: "You will not vacate past this exact position",
    },
];

// let movieText = document.getElementById("movie-text");
// let userGuess = document.getElementById("user-guess");
// let submitBtn = document.getElementById("submit-btn");
// let hintBtn = document.getElementById("hint-btn");

// let randomMovie = Math.floor(Math.random() * movies.length);
// console.log(randomMovie);

// movieText.textContent = movieExplanation();

// // Movie Details
// function movieExplanation() {
//     return movies[randomMovie].explanation;
// }

// function movieTitle() {
//     return movies[randomMovie].title;
// }

// function movieHint() {
//     return movies[randomMovie].hint;
// }

// // Hint Button
// hintBtn.addEventListener("click", () => {
//     movieText.textContent += " Hint: " + movieHint();
// });

// // Submit Button
// submitBtn.addEventListener("click", () => {
//     if (userGuess.value === movieTitle()) {
//         return (submitBtn.textContent = "Well Done You won, Now play again.");
//     } else {
//         return (movieText.textContent += "Sorry Try again");
//     }
// });

class Random {
    random() {}
}

class Movies {
    constructor() {
        this.submitBtn = document.getElementById("submit-btn");
        this.hintBtn = document.getElementById("hint-btn");
        this.userGuess = document.getElementById("user-guess");
        this.movieDeets = document.getElementById("movie-text");
        this.success = document.getElementById("success-alert");
        this.fail = document.getElementById("fail-alert");

        this.submitButton();
        this.onload();
        this.hintButton();
        // this.generateRandomNumber();
    }

    generateRandomNumber() {
        const movieNum = Math.floor(Math.random() * movies.length);
        localStorage.setItem("movieNumber", movieNum);
        return movieNum;
    }

    onload() {
        window.addEventListener("load", (event) => {
            return (this.movieDeets.textContent =
                movies[this.generateRandomNumber()].explanation);
        });
    }

    submitButton() {
        this.submitBtn.addEventListener("click", () => this.onSubmitClick());
    }

    onSubmitClick() {
        const movieNum = localStorage.getItem("movieNumber");
        const random = movies[movieNum].title;
        const guess = this.userGuess.value;
        if (guess == random) {
            this.showSuccessAlert();
            localStorage.removeItem("movieNumber");
        } else {
            this.showFailAlert();
            console.log(random);
        }
    }

    hintButton() {
        this.hintBtn.addEventListener("click", () => this.onHintClick());
    }

    onHintClick() {
        const movieNum = localStorage.getItem("movieNumber");
        return (this.movieDeets.textContent += movies[movieNum].hint);
    }

    showSuccessAlert() {
        this.success.classList.remove("hide");
        this.fail.classList.add("hide");
    }

    showFailAlert() {
        this.success.classList.add("hide");
        this.fail.classList.remove("hide");
    }
}

const movieGuesser = new Movies();
