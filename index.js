const resultDisplay = document.querySelector('#result')
const IMAGE_URL = 'https://image.tmdb.org/t/p/w1280'
function getMovies(){
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=62bbe343222b3551f9b15d712b4d6b68&page=1')
    .then(res=>res.json())
    .then(data=>{
        console.log(data.results)
        displayMovies(data.results)

     } )
    .catch(err=>console.log(err))
}

getMovies()

function displayMovies(arr){
    arr.forEach(movie=>{
        const movieDiv = document.createElement('div')
        movieDiv.innerHTML = `
       <p>${movie.title? movie.title: movie.name}</p>
       <img src=${IMAGE_URL + movie.poster_path} alt=''>
        `
        resultDisplay.append(movieDiv)
    })
}
const formData= new formData()
function getAll(){

}
document.getElementById("app").innerHTML = `
<h1>File Upload & FormData Example</h1>
<div>
<input type="file" id="fileInput" />
</div>
`;

const fileInput = document.querySelector("#fileInput");

const uploadFile = file => {
  console.log("Uploading file...");
  const API_ENDPOINT = "https://file.io";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
  };
  formData.append("file", file);
  request.send(formData);
};

fileInput.addEventListener("change", event => {
  const files = event.target.files;
  uploadFile(files[20]);
});