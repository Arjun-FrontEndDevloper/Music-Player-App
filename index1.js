// adding event to toggle element

let toggleEl = document.querySelector(".outerdiv");
let slider = document.querySelector(".innerdiv");
let bodyEl = document.querySelector("body");
let togglename = document.querySelector(".togglename");
bodyEl.style.backgroundColor = "white";
toggleEl.addEventListener("click", () => {
  if (bodyEl.style.backgroundColor == "white") {
    slider.style.transform = "translate(40px)";
    bodyEl.style.backgroundColor = "grey";
    togglename.textContent = "Light";
    toggleEl.style.backgroundColor = "#6ab7de";
    document.querySelector("h1").style.color = "white";
    document.querySelector("#allSongs").style.backgroundColor = "#263238";
    document.querySelector("#currentSong").style.backgroundColor = "#263238";
    document.querySelector("#Playlist").style.backgroundColor = "#263238";
  } else {
    slider.style.transform = "translate(0px)";
    bodyEl.style.backgroundColor = "white";
    togglename.textContent = "Dark";
    toggleEl.style.backgroundColor = "grey";
    document.querySelector("h1").style.color = "black";
    document.querySelector("#allSongs").style.backgroundColor = "#6ab7de";
    document.querySelector("#currentSong").style.backgroundColor = "#6ab7de";
    document.querySelector("#Playlist").style.backgroundColor = "#6ab7de";
  }
});

//  Song Database
let arr = [
  {
    id: 1,
    song: "Shape Of You",
    artist: "Ed Sheeran",
    img: "/Music Player App/multimedia/Ed.png",
    genre: "Pop",
    source:
      "/Music Player App/multimedia/Ed Sheeran - Shape of You(No Copyright Remix).mp3",
  },
  {
    id: 2,
    song: "All Of Me",
    artist: "Adele",
    img: "/Music Player App/multimedia/adele.png",
    genre: "Pop",
    source: "/Music Player App/multimedia/Allofme.mp3",
  },
  {
    id: 3,
    song: "Somelike Like you",
    artist: "Adele",
    img: "/Music Player App/multimedia/adele.png",
    genre: "Pop",
    source: "/Music Player App/multimedia/someonelikeme.mp3",
  },
  {
    id: 4,
    song: "Wonderwall",
    artist: "Oasis",
    img: "/Music Player App/multimedia/oasis.png",
    genre: "Rock",
    source: "/Music Player App/multimedia/wonderwall.mp3",
  },
  {
    id: 5,
    song: "Sugar",
    artist: "Maroon",
    img: "/Music Player App/multimedia/maroon 5.png",
    genre: "Hip-Hip",
    source: "/Music Player App/multimedia/Maroon 5 - Sugar.mp3",
  },
  {
    id: 6,
    song: "Locked Away",
    artist: "R.City",
    img: "/Music Player App/multimedia/r city.png",
    genre: "Hip-Hop",
    source:
      "/Music Player App/multimedia/angga-renggana-t_r-city-ft-adam-levine-locked-away.mp3",
  },
  {
    id: 7,
    song: "Something Like you",
    artist: "Adele",
    img: "/Music Player App/multimedia/adele.png",
    genre: "hip-hop",
    source:
      "/Music Player App/multimedia/Adele-Someone-Like-You-(TrendyBeatz.com).mp3",
  },
];

let plStg = [];

// Selecting Elements
let cardData = document.getElementById("currentSong");
console.log(cardData);
let allSongsEL = document.getElementById("allSong");
console.log(allSongsEL);
let allPl = document.getElementById("allPl");
console.log(allPl);
let ipEl = document.getElementById("playlistInput");
console.log(ipEl);
let currentIndex = 0;
let isPlaying = false;
let selectEl = document.querySelector("#genre");
let createbtn = document.getElementById("createbtn");
console.log(createbtn);

function playSong(index) {
  if (index >= 0 && index < arr.length) {
    currentIndex = index;
    renderCurrentSong.call(arr[currentIndex]);
  }
}

// Load All Songs
function loadAllSongs() {
  console.log("loadAllSongs");
  allSongsEL.innerHTML = "";
  let h2El = document.createElement("h2");
  h2El.textContent = "All Songs";
  h2El.style.fontWeight = "bold";
  h2El.style.marginBottom = "3rem";
  h2El.style.color = "white";

  allSongsEL.appendChild(h2El);

  arr.forEach((obj, index) => {
    console.log("index==" + index);
    if (
      selectEl.value === "" ||
      selectEl.value.toLowerCase() === obj.genre.toLowerCase()
    ) {
      let pEl = document.createElement("p");
      pEl.textContent = `${obj.song} - ${obj.artist}`;
      pEl.style.cursor = "pointer";
      pEl.style.color = "white";
      pEl.style.backgroundColor = "#0a81bc";
      pEl.style.borderRadius = "0.4rem";
      pEl.style.padding = "0.4rem";
      allSongsEL.appendChild(pEl);

      pEl.addEventListener("click", () => playSong(index));
      console.log(`playSong${index}`);
      pEl.addEventListener(
        "mouseover",
        () => (pEl.style.backgroundColor = "#6ab7de")
      );
      pEl.addEventListener(
        "mouseout",
        () => (pEl.style.backgroundColor = "#0a81bc")
      );
    }
  });
}

selectEl.addEventListener("change", loadAllSongs);

function renderCurrentSong() {
  cardData.innerHTML = "";
  let newEl = document.createElement("div");
  cardData.appendChild(newEl);

  let newdiv = document.createElement("div");
  cardData.appendChild(newEl);
  newEl.appendChild(newdiv);
  newdiv.style.width = "90%";
  newdiv.style.height = "60%";
  newdiv.style.boxShadow = "-2px -2px 10px 5px #8e7cad";
  newdiv.style.margin = "0.5rem";
  newdiv.style.padding = "0.3rem";
  newdiv.style.borderRadius = "0.5rem";
  newdiv.style.backgroundColor = "#0472aa";

  let imgEl = document.createElement("img");
  imgEl.src = this.img;
  imgEl.style.width = "100%";
  imgEl.style.height = "80%";
  newdiv.appendChild(imgEl);

  let title = document.createElement("p");
  title.textContent = `${this.song} - ${this.artist}`;
  title.style.margin = "0.5rem";
  newdiv.appendChild(title);

  let audEl = document.createElement("audio");
  audEl.src = this.source;
  audEl.controls = true;
  audEl.margin = "0.5rem";
  audEl.style.width = "80%";
  newEl.appendChild(audEl);

  // 🎛 Controls
  let prevBtn = document.createElement("button");
  prevBtn.style.margin = "0.5rem";
  prevBtn.style.backgroundColor = "#915bfd";
  prevBtn.style.color = "white";
  let playBtn = document.createElement("button");
  playBtn.style.margin = "0.5rem";
  playBtn.style.backgroundColor = "#915bfd";
  playBtn.style.color = "white";
  let nextBtn = document.createElement("button");
  nextBtn.style.margin = "0.5rem";
  nextBtn.style.backgroundColor = "#915bfd";
  nextBtn.style.color = "white";
  let addtoPl = document.createElement("button");
  addtoPl.style.margin = "0.5rem";
  addtoPl.style.backgroundColor = "#915bfd";
  addtoPl.style.color = "white";

  prevBtn.textContent = "Previous";
  playBtn.textContent = "Play/Pause";
  nextBtn.textContent = "Next";
  addtoPl.textContent = "Add to Playlist";

  prevBtn.addEventListener("click", () => playSong(currentIndex - 1));
  nextBtn.addEventListener("click", () => playSong(currentIndex + 1));
  addtoPl.addEventListener("click", () => addSong.call(this));

  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      audEl.pause();
      isPlaying = false;
    } else {
      audEl.play();
      isPlaying = true;
    }
  });

  newEl.appendChild(prevBtn);
  newEl.appendChild(playBtn);
  newEl.appendChild(nextBtn);
  newEl.appendChild(addtoPl);

  audEl.play();
  isPlaying = true;
}

function createPl() {
  let newDiv = document.createElement("div");
  newDiv.className = plStg.length;
  newDiv.textContent = ipEl.value;
  newDiv.backgroundColor = "#0a81bc";
  newDiv.style.margin = "0.5rem";
  newDiv.style.borderRadius = "0.3rem";
  newDiv.style.color = "white";
  newDiv.style.padding = "0.2rem";
  newDiv.addEventListener(
    "mouseover",
    () => (newDiv.style.backgroundColor = "#6ab7de")
  );
  newDiv.addEventListener(
    "mouseout",
    () => (newDiv.style.backgroundColor = "#0a81bc")
  );

  if (ipEl.value.trim() !== "") {
    allPl.appendChild(newDiv);
    plStg.push([]);
    ipEl.value = "";
  } else {
    alert("Please enter a playlist name.");
  }
}

createbtn.addEventListener("click", () => createPl());

// document.addEventListener("DOMContentLoaded", () => {
//   // console.log("Hi")
//   plStg.forEach((_, index) => {
//     // consolelog("plstag-->"+plStg);
//     let newDiv = document.createElement("div");
//     newDiv.className = index;
//     newDiv.textContent = `Playlist ${index + 1}`;
//     newDiv.style.backgroundColor = "#0a81bc";
//     newDiv.style.margin = "0.5rem";
//     newDiv.style.borderRadius = "0.3rem";
//     newDiv.style.color = "white";
//     newDiv.style.padding = "0.2rem";
//     newDiv.addEventListener(
//       "mouseover",
//       () => (newDiv.style.backgroundColor = "#6ab7de")
//     );
//     newDiv.addEventListener(
//       "mouseout",
//       () => (newDiv.style.backgroundColor = "#0a81bc")
//     );

//     allPl.appendChild(newDiv);
//   });
// });

function addSong() {  
  arr.forEach((obj) => {
    if (obj.song === this.song) {
      const container = document.getElementById("allPl");
      // alert("pls select playlist");
      console.log("alert addSong")
      container.addEventListener("click", function (event) {
        console.log("alert inside event")

        const clickedDiv = event.target;
        console.log("alert inside event 1: "+clickedDiv)
        console.log("alert inside event 2: "+clickedDiv.tagName)
        console.log("alert inside event 3: "+clickedDiv.className)//div index
        console.log("alert inside event 4: "+plStg.length)

        for (let i=0 ; i< plStg.length; i++){
          console.log("hi index "+ i + "  values " +obj.song )
        }
        // if (clickedDiv.tagName === "DIV") {
          const className = clickedDiv.className;
          // clickedDiv.style.cursor = "pointer";
          // plStg= [];
          if (!(plStg[className].includes(obj))) {
            plStg[className].push(obj);
            console.log("pushing")
          }
          console.log("alert inside event 5 after push: "+plStg[className].length)
          for(let i = 0; i < plStg[className].length; i++){
            console.log("hi "+ i)
            console.log("hi "+ plStg[className][i].song)
          }

          let currentPl = document.querySelector("#currentPl");
          currentPl.textContent = "";
          console.log("plstg final before loop-->"+plStg[className])
          plStg[className].forEach((obj, index) => {
            console.log("alert inside adding element "+plStg)

            let songDiv = document.createElement("div");
            songDiv.textContent = `${obj.song} - ${obj.artist}`;
            songDiv.backgroundColor = "#0a81bc";
            songDiv.style.margin = "0.5rem";
            songDiv.style.borderRadius = "0.3rem";
            songDiv.style.color = "white";
            songDiv.style.padding = "0.2rem";
            songDiv.addEventListener(
              "mouseover",
              () => (songDiv.style.backgroundColor = "#6ab7de")
            );
            songDiv.addEventListener(
              "mouseout",
              () => (songDiv.style.backgroundColor = "#0a81bc")
            );

            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.style.marginLeft = "10px";
            removeBtn.style.color = "white";
            removeBtn.style.backgroundColor = "#915bfd";
            removeBtn.addEventListener("click", () => {
              plStg[className].splice(index, 1);
              // renderPlaylistSongs(className);
            });
            songDiv.appendChild(removeBtn);
            currentPl.appendChild(songDiv);
          });
        // }
      });
    }
  });
}

function renderPlaylistSongs() {
  currentPl.textContent = "";
  const container = document.getElementById("allPl");
  container.addEventListener("click", function (event) {
    const clickedDiv = event.target;

    if (clickedDiv.tagName === "DIV") {
      const className = clickedDiv.className;
      clickedDiv.style.cursor = "pointer";
      let header = document.createElement("h2");
      header.textContent = "Current Playlist";
      header.style.fontWeight = "bold";

      plStg[className].forEach((obj) => {
        let currentPl = document.querySelector("#currentPl");

        let songDiv = document.createElement("div");
        songDiv.textContent = `${obj.song} - ${obj.artist}`;
        songDiv.backgroundColor = "#0a81bc";
        songDiv.style.margin = "0.5rem";
        songDiv.style.borderRadius = "0.3rem";
        songDiv.style.color = "white";
        songDiv.style.padding = "0.2rem";
        songDiv.addEventListener(
          "mouseover",
          () => (songDiv.style.backgroundColor = "#6ab7de")
        );
        songDiv.addEventListener(
          "mouseout",
          () => (songDiv.style.backgroundColor = "#0a81bc")
        );

        currentPl.appendChild(songDiv);
      });
    }
  });
}

// additional song and playlist search

// song Search

let searchSongInput = document.getElementById("searchSong");
searchSongInput.addEventListener("input", () => {
  let searchTerm = searchSongInput.value.toLowerCase();
  allSongsEL.innerHTML = "<h2>Search Results</h2>";
  arr.forEach((obj) => {
    if (obj.song.toLowerCase().includes(searchTerm)) {
      let pEl = document.createElement("p");
      pEl.textContent = `${obj.song} - ${obj.artist}`;
      pEl.style.cursor = "pointer";
      pEl.backgroundColor = "#0a81bc";
      pEl.style.margin = "0.5rem";
      pEl.style.borderRadius = "0.3rem";
      pEl.style.color = "white";
      pEl.style.padding = "0.2rem";

      allSongsEL.appendChild(pEl);
      pEl.addEventListener("click", () => renderCurrentSong.call(obj));
    }
  });
});

// Playlist Search

let searchPlaylistInput = document.getElementById("searchPlaylist");
searchPlaylistInput.addEventListener("input", () => {
  let searchTerm = searchPlaylistInput.value.toLowerCase();
  allPl.innerHTML = "<h3>Filtered Playlists</h3>";

  plStg.forEach((playlist, index) => {
    let div = document.createElement("div");
    div.className = `playlist-${index}`;
    div.textContent = `Playlist ${index + 1}`;
    div.backgroundColor = "#0a81bc";
    div.style.margin = "0.5rem";
    div.style.borderRadius = "0.3rem";
    div.style.color = "white";
    div.style.padding = "0.2rem";
    if (div.textContent.toLowerCase().includes(searchTerm)) {
      allPl.appendChild(div);
    }
  });
});
