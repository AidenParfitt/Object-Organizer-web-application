// this is my array of objects
let Games = [
  {
    title: "New Super Mario Bros: Wii",
    release: 2009,
    publisher: "Nintendo",
    genre: "platformer",
  },
  {
    title: "Halo",
    release: 2001,
    publisher: "Microsoft",
    genre: "First Person Shooter",
  },
  {
    title: "Super Smash Bros For Wii U",
    release: 2014,
    publisher: "Nintendo",
    genre: "Platform Fighter",
  },
  {
    title: "God of War",
    release: 2018,
    publisher: "Sony",
    genre: "Action Adventure",
  },
  {
    title: "The Legend of Zelda: Breath of the wild",
    release: 2017,
    publisher: "Nintendo",
    genre: "Action Adventure",
  },

  {
    title: "Call of Duty: Black Ops 2",
    release: 2012,
    publisher: "Activision",
    genre: "First Person Shooter",
  },
  {
    title: "Super Mario RPG: Legend of the seven stars",
    release: 1995,
    publisher: "Nintendo",
    genre: "RPG",
  },
  {
    title: "Fortnite",
    release: 2017,
    publisher: "Epic Games",
    genre: "Battle Royale",
  },
  {
    title: "Balloon Fight",
    release: 1986,
    publisher: "Nintendo",
    genre: "Arcade",
  },
  {
    title: "Kirby:Super Star",
    release: 1996,
    publisher: "Nintendo",
    genre: "action-platformer",
  },
];

// this is used for my button functionallity and my fucntion that loads in the initial data
window.onload = function () {
  LoadGames(Games);

  let addButton = document
    .querySelector("#Game")
    .addEventListener("click", addItem);

  let titleButton = document
    .querySelector("#titleSearch")
    .addEventListener("click", searchTitle);

  let releaseButton = document
    .querySelector("#releaseSearch")
    .addEventListener("click", SearchYear);

  let publisherButton = document
    .querySelector("#PublisherSearch")
    .addEventListener("click", searchPublisher);

  let genreButton = document
    .querySelector("#GenreSearch")
    .addEventListener("click", searchGenre);
};

// this function is for actually loading in everything
function LoadGames(array) {
  let load = document.querySelector("#game-container");
  let html = "";

  html += "<table>";
  html += "<tr>";
  html += "<th>" + "title" + "</th>";
  html += "<th>" + "release" + "</th>";
  html += "<th>" + "publisher" + "</th>";
  html += "<th>" + "genre" + "</th>";
  html == "</tr>";

  for (i = 0; i < array.length; i++) {
    let arrays = array[i];
    html += "<tr>";
    html += "<td>" + arrays.title + "</td>";
    html += "<td>" + arrays.release + "</td>";
    html += "<td>" + arrays.publisher + "</td>";
    html += "<td>" + arrays.genre + "</td>";
    html += "</tr>";
  }

  html += "</table>";

  load.innerHTML = html;

  return load;
}
// this is for when the user adds in a new object to the array of objects
function addItem() {
  let Title = document.querySelector(".Title");
  let Release = document.querySelector(".Release");
  let publisher = document.querySelector(".Pub");
  let genre = document.querySelector(".Genre");

  let titleInput = Title.value;
  let releaseInput = Release.value;
  let publishInput = publisher.value;
  let genreInput = genre.value;

  let New = {
    title: titleInput,
    release: releaseInput,
    publisher: publishInput,
    genre: genreInput,
  };

  Games.push(New);

  LoadGames(Games);

  return New;
}
// the following 4 functions are used for the search feature

function SearchYear() {
  LoadGames(Games);
  let searchMin = Number(document.querySelector(".searchMinRelease").value);
  let searchMax = Number(document.querySelector(".searchMaxRelease").value);

  let columns = document.querySelectorAll("tr");

  for (let i = 0; i < Games.length; i++) {
    let allGames = Games[i];
    let Allcolumns = columns[i + 1];
    let Years = allGames.release;
    let cells = Allcolumns.querySelectorAll("td");
    let allReleaseYears = cells[1];
    if (Years <= searchMax && searchMin <= Years) {
      allReleaseYears.classList.add("Search-coloration");
    }
  }
  return columns;
}
function searchTitle() {
  LoadGames(Games);
  let TitleSearchInput = document.querySelector(".searchTitle");
  let columns = document.querySelectorAll("tr");

  for (let i = 0; i < Games.length; i++) {
    let allGames = Games[i];
    let Allcolumns = columns[i + 1];
    let titles = allGames.title;
    let cells = Allcolumns.querySelectorAll("td");
    let allTitles = cells[0];
    if (titles.toLowerCase().includes(TitleSearchInput.value.toLowerCase())) {
      allTitles.classList.add("Search-coloration");
    }
  }
  return columns;
}
function searchPublisher() {
  LoadGames(Games);
  let publisherSearchInput = document.querySelector(".searchPublisher");
  let columns = document.querySelectorAll("tr");

  for (let i = 0; i < Games.length; i++) {
    let allGames = Games[i];
    let allcolumns = columns[i + 1];
    let Publisher = allGames.publisher;
    let cells = allcolumns.querySelectorAll("td");
    let allPublishers = cells[2];
    if (
      Publisher.toLowerCase().includes(publisherSearchInput.value.toLowerCase())
    ) {
      allPublishers.classList.add("Search-coloration");
    }
  }
  return columns;
}
function searchGenre() {
  LoadGames(Games);
  let genreSearchInput = document.querySelector(".searchGenre");
  let columns = document.querySelectorAll("tr");

  for (let i = 0; i < Games.length; i++) {
    let allGames = Games[i];
    let allcolumns = columns[i + 1];
    let Genre = allGames.genre;
    let cells = allcolumns.querySelectorAll("td");
    let allGenres = cells[3];
    if (Genre.toLowerCase().includes(genreSearchInput.value.toLowerCase())) {
      allGenres.classList.add("Search-coloration");
    }
  }
  return columns;
}
