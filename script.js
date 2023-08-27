const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const bestMovies = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  `Schindler's List`,
  'The Matrix',
  'Pulp Fiction',
  'The Good, the Bad and the Ugly',
  'Fight Club',
  'Inception',
  'Goodfellas'
];

// store list items
const listItems = [];

let dragStartIndex;

// Insert list items into DOM
const createList = () => {
  [...bestMovies]
    .map(elem => ({ value: elem, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .forEach((movie, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="movie-name">${movie.value}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
    `;
      listItems.push(listItem);
      draggableList.appendChild(listItem);
    });
};
createList();
