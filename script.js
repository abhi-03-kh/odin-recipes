const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize');
const AREA = 960; // width of the container in pixels

function makeGrid(n = 16) {
  container.innerHTML = '';                  // remove old grid
  const cellSize = AREA / n;                  // size of each square

  for (let i = 0; i < n * n; i++) {
    const d = document.createElement('div');  // create a square
    d.className = 'cell';
    d.style.width = cellSize + 'px';
    d.style.height = cellSize + 'px';

    // color the cell on hover
    d.addEventListener('mouseenter', () => {
      d.classList.add('ink');
    });

    container.appendChild(d);                 // add square to container
  }
}

// button to resize grid

