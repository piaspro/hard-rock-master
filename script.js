// Active search area
const searchArea = document.getElementById("searchArea");
searchArea.addEventListener('keypress', function search(press) {
    if(press.keyCode == 13){
        getResults(searchArea.value);
    }
    }
)
// Active search btn
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', function () {
    getResults(searchArea.value);
})
// Get data from api
function getResults(value) {
    fetch(`https://api.lyrics.ovh/suggest/summer`)
    .then(response => response.json())
    .then(data => console.log(data))
}
// Display none
const lyricsArea = document.getElementById("lyricsArea");
lyricsArea.style.display = "none"; 
const searchResult = document.getElementById("searchResult");
searchResult.style.display = "none"; 

