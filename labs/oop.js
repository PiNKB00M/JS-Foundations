// const starWars = {
//     title: 'Star Wars',
//     genre: 'SciFi',
//     year: 1976,
//     print: function () {
//         console.log(`${this.title} is a ${this.genre} that was released in ${this.year}.`);
//     }
// };

// const theTerminator = {
//     title: 'The Terminator',
//     genre: 'SciFi',
//     year: 1984,
//     print: function () {
//         console.log(`${this.title} is a ${this.genre} that was released in ${this.year}.`);
//     }
// };

// const groundHogDay = {
//     title: 'Groundhog Day',
//     genre: 'Comedy',
//     year: 1993,
//     print: function () {
//         console.log(`${this.title} is a ${this.genre} that was released in ${this.year}.`);
//     }
// }

// const movies = [starWars, theTerminator, groundHogDay];
// movies.forEach(movie => {
//     movie.print();
// });

function Movie(title, genre, year){
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.print = function(){
        console.log(`${this.title} is a ${this.genre} that was released in ${this.year}.`);
    }
}

const starWars = new Movie('Star Wars', 'SciFi', 1976);
const theTerminator = new Movie('The Terminator', 'SciFi', 1984);
const groundHogDay = new Movie('Groundhog Day', 'Comedy', 1993);

const movies = [starWars, theTerminator, groundHogDay];
movies.forEach(movie => {
    movie.print();
});