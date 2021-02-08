const searchSongs = () => {
     const searchText = document.getElementById("search-song-input").value;
     const url = `https://api.lyrics.ovh/suggest/${searchText}`;
     // load data
     fetch(url)
          .then((res) => res.json())
          .then((data) => displaySongs(data.data));
};

const displaySongs = (songs) => {
     console.log(songs);
     const songContainer = document.querySelector(".search-result");
     const div = document.createElement("div");
     songs.forEach((song) => {
          const songDiv = document.createElement("div");
          songDiv.className = "single-result row align-items-center my-3 p-3";
          songDiv.innerHTML = `
			<div class="col-md-9">
				<h3 class="lyrics-name">${song.title}</h3>
				<p class="author lead">Album by <span>${song.artist.name}</span></p>
				<audio controls src="${song.preview}"></audio>
			</div>
			<div class="col-md-3 text-md-right text-center">
				<button class="btn btn-success">Get Lyrics</button>
			</div>`;

          div.appendChild(songDiv);
     });
     songContainer.innerHTML = div.innerHTML;
};
