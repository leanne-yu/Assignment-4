const getData = async (url, params) => {
    try {
        return await axios.get(url, params);
    } catch (error) {
        console.log(error)
    }
};
 
get.addEventListener('click', async (_event) => {
    selectElement = document.querySelector('#Movies');
    id = selectElement.options[selectElement.selectedIndex].value;
 
    const movieData = await getMovies(id);
    callMovies(movieData)
});
 
function callMovies(movieData) {
    document.getElementById('div1').innerHTML = "";
 
    const original_title = document.createElement('h1')
    original_title.innerHTML = movieData['original_title']
    original_title.setAttribute('id', 'movietitle');
    document.getElementById('div1').appendChild(original_title);
 
    const img1 = document.createElement("img");
    img1.src = 'https://image.tmdb.org/t/p/w500' + movieData['poster_path'];
    img1.setAttribute('id', 'img1');
    document.getElementById('div1').appendChild(img1);
 
    const overview = document.createElement('p');
    overview.innerHTML = 'Overview:<br>' + movieData['overview'];
    overview.setAttribute('id', 'overview');
    document.getElementById('div1').appendChild(overview);
 
    const release_date = document.createElement('p');
    release_date.innerHTML = 'Release Date: ' + movieData['release_date'];
    release_date.setAttribute('id', 'release_date');
    document.getElementById('div1').appendChild(release_date);
 
    const runtime = document.createElement('p')
    runtime.innerHTML = 'Runtime: ' + movieData['runtime']
    runtime.setAttribute('id', 'runtime');
    document.getElementById('div1').appendChild(runtime);
 
    const original_language = document.createElement("p");
    original_language.innerHTML = "Original Language: " + movieData["original_language"];
    original_language.setAttribute('id', 'original_language');
    document.getElementById('div1').appendChild(original_language);
 
    const popularity = document.createElement("p");
    popularity.innerHTML = 'Popularity: ' + movieData["popularity"];
    popularity.setAttribute("id", "popularity");
    document.getElementById("div1").appendChild(popularity);
 
    const vote_average = document.createElement('p');
    vote_average.innerHTML = "Vote Average: " + movieData['vote_average'];
    vote_average.setAttribute('id', 'vote_average');
    document.getElementById('div1').appendChild(vote_average);
 
    const budget = document.createElement('p');
    budget.innerHTML = "Budget: $" + movieData["budget"];
    budget.setAttribute('id', 'budget');
    document.getElementById('div1').appendChild(budget);
 
    const img2 = document.createElement("img");
    img2.src = 'https://image.tmdb.org/t/p/w500' + movieData['backdrop_path'];
    img2.setAttribute('id', 'img2');
    document.getElementById('div1').appendChild(img2);
}
 
const getMovies = async (id) => {
    const movieData = await getData(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
            api_key: "ab590dbfc1eb546b5263a30c390d2d07",
        }
    });
    return movieData.data;
}