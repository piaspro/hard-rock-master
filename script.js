// Display none
const lyricsArea = document.getElementById("lyricsArea");
lyricsArea.style.display = "none";
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
    fetch(`https://api.lyrics.ovh/suggest/${value}`)
    .then(response => response.json())
    .then(songs => displayResult(songs))
}
// Display result function
function displayResult(songs) {
    const allSongs = songs.data;
    const searchResult = document.getElementById("searchResult");
    for (let i = 0; i < 10; i++) {
        const title = allSongs[i].title;
        const artist = allSongs[i].album.title;
        searchResult.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                    <div class="col-md-9">
                                        <h3 class="lyrics-name">${title}</h3>
                                        <p class="author lead">Album by <span>${artist}</span></p>
                                    </div>
                                    <div class="col-md-3 text-md-right text-center">
                                        <button id="getLyrics" class="btn btn-success">Get Lyrics</button>
                                    </div>
                                </div>`
    }
    
}
// get lyrics

