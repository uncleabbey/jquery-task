// random integer for id
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const movies = [
  {
    id: randomInteger(1, 200),
    title: 'Power',
    rating: 8,
  },
  {
    id: randomInteger(1, 200),
    title: 'Kingsman',
    rating: 10,
  },
  {
    id: randomInteger(1, 200),
    title: 'Condor',
    rating: 2,
  },
];
$(document).ready(() => {
  const addToDom = (movie) => {
    $('.tbody').append(`
    <tr id=${movie.id}>
      <td>${movie.title}</td>
      <td>${movie.rating}</td>
      <td><button type="button" class="btn-danger" onclick="removeMovie(event, ${movie.id})">Delete</button></td>
    </tr>
    `);
  };
  $('#form').submit((event) => {
    event.preventDefault();
    let $title = $('#form-title')[0].value;
    let $rating = Number($('#form-rating')[0].value);

    const $data = {
      id: randomInteger(1, 200),
      title: $title,
      rating: $rating,
    };
    movies.push($data);
    addToDom($data);
    $('#form-title')[0].value = '';
    $('#form-rating')[0].value = '';
  });

  // display data to ui

  const displayMovies = (movies) => {
    $('.tbody').empty();
    $.map(movies, (movie) => addToDom(movie));
  };
  displayMovies(movies);
  5;

  $('.title-up').click((e) => {
    e.preventDefault();
    const newMovies = movies.sort((a, b) => compareAscending(a, b));
    displayMovies(newMovies);
  });
  $('.title-down').click((e) => {
    e.preventDefault();
    const newMovies = movies.sort((a, b) => compareDescending(a, b));
    displayMovies(newMovies);
  });
  $('.rate-up').click((e) => {
    e.preventDefault();
    const newMovies = movies.sort((a, b) => ratingUp(a, b));
    displayMovies(newMovies);
  });
  $('.rate-down').click((e) => {
    e.preventDefault();
    const newMovies = movies.sort((a, b) => ratingDown(a, b));
    displayMovies(newMovies);
  });
});

const removeMovie = (event, id) => {
  $(`#${id}`).remove();

  // update the array
  const index = movies.findIndex((movie) => movie.id === id);
  if (index != -1) {
    movies.splice(index, 1);
  }
};

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareAscending(a, b) {
  const da = a.title.toUpperCase();
  const db = b.title.toUpperCase();

  let comparison = 0;
  if (da > db) {
    comparison = 1;
  } else if (da < db) {
    comparison = -1;
  }
  return comparison;
}
function compareDescending(a, b) {
  const da = a.title.toUpperCase();
  const db = b.title.toUpperCase();

  let comparison = 0;
  if (da > db) {
    comparison = -1;
  } else if (da < db) {
    comparison = 1;
  }
  return comparison;
}
function ratingUp(a, b) {
  const da = a.rating;
  const db = b.rating;

  let comparison = 0;
  if (da > db) {
    comparison = 1;
  } else if (da < db) {
    comparison = -1;
  }
  return comparison;
}
function ratingDown(a, b) {
  const da = a.rating;
  const db = b.rating;

  let comparison = 0;
  if (da > db) {
    comparison = -1;
  } else if (da < db) {
    comparison = 1;
  }
  return comparison;
}
