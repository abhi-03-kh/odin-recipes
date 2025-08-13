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
     d.dataset.hoverCount = '0';

    // color the cell on hover
     d.addEventListener('mouseenter', () => {
      let count = parseInt(d.dataset.hoverCount, 10);

      if (count === 0) {
        // First time hovered: assign random color
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        d.dataset.baseColor = `${r},${g},${b}`;
      }

      count++;
      if (count > 10) count = 10; // cap at 10

      // Darken by increasing opacity toward 1
      const opacity = count / 10;
      const [r, g, b] = d.dataset.baseColor.split(',');
      d.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

      d.dataset.hoverCount = count.toString();
    });

    container.appendChild(d);
  }
}


// button to resize grid
resizeBtn.addEventListener('click', () => {
  const val = prompt('Squares per side? (1–100)', '16');
  if (val === null) return; // cancel clicked

  const n = parseInt(val, 10);
  if (Number.isNaN(n) || n < 1 || n > 100) {
    alert('Please enter a number from 1 to 100.');
    return;
  }

  makeGrid(n);
});

// create initial 16x16 grid
makeGrid(16);
