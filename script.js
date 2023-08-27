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

  addEventListeners();
};
createList();

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggables => {
    draggables.addEventListener('dragstart', dragStart);
  });
  dragListItems.forEach(draggables => {
    draggables.addEventListener('dragover', dragOver);
    draggables.addEventListener('drop', dragDrop);
    draggables.addEventListener('dragenter', dragEnter);
    draggables.addEventListener('dragleave', dragLeave);
  });
}

function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragOver(event) {
  event.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo)
  listItems[toIndex].appendChild(itemOne)


  // console.log(itemOne, itemTwo);
}
