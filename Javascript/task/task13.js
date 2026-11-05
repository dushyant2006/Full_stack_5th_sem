// use find method on arry of movies object to log the title of the first movie with 5 star rating
let movies=[
    {title:"Movie 1", rating:4},
    {title:"Movie 2", rating:5},
    {title:"Movie 3", rating:3},
    {title:"Movie 4", rating:5},
]
console.log(movies.find(movie => movie.rating === 5).title);