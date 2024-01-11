// initial variables
// inputs
let movieName = document.getElementById("input")
let searchBtn = document.getElementById("btn")

// containers
let inputData = document.getElementById("input-data")
let outputData = document.getElementById("output-data")
let result = document.querySelector(".result-container")
let imgContainer = document.querySelector(".img-container")

// error handeling containers / elements
let errHandle = document.getElementById("errHandle")
let msg = document.getElementById("message")

// elements
let poster = document.getElementById("poster")
let title = document.getElementById("title")
let year = document.getElementById("year")
let director = document.getElementById("director")
let plot = document.getElementById("plot")
let cast = document.getElementById("cast")
let genre = document.getElementById("genre")
let ratings = document.getElementById("ratings")

// function to fetch data from API
function getData() {
    let movie = movieName.value;
    let key = "21827380"
    let URL = `https://www.omdbapi.com/?t=${movie}&apikey=${key}`

    // if the input is empty
    if (movie.length == 0) {
        outputData.style.display = "none"
        imgContainer.style.display = "none"
        errHandle.style.display = "block"
        msg.textContent = "Please enter correct movie!"
    }
    else {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {

                if (data.Response == "True") {
                    console.log(data);
                    title.textContent = data.Title
                    year.textContent = `${data.Year} (${data.Country})`
                    director.innerHTML = `<b>${data.Director}</b>`
                    ratings.innerHTML = `<b>IMDB</b>: ${data.imdbRating}`
                    poster.src = data.Poster
                    plot.innerHTML = `<b>Plot</b>: ${data.Plot}`
                    cast.innerHTML = `<b>Cast</b>: ${data.Actors}`
                    genre.innerHTML = `<b>Genre</b>: ${data.Genre}`

                    result.style.display = "grid"
                    outputData.style.display = "block"
                    imgContainer.style.display = "block"
                    errHandle.style.display = "none"
                }
                else {
                    result.style.display = "grid"
                    outputData.style.display = "none"
                    imgContainer.style.display = "none"
                    errHandle.style.display = "block"
                    msg.textContent = data.Error
                }
            })
    }
}

searchBtn.addEventListener("click", getData)
// window.addEventListener("load", getData)