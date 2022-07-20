const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

export default class Grid {
  /*untuk set variabel css */
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);

    this.sel2 = BuatElementSel(gridElement).map((elementSel) => {
      return new Sel(elementSel, index % GRID_SIZE, index / GRID_SIZE);
    });
  }
}

class Sel {
  constructor(elementSel, x, y) {
    this.elementSel = elementSel;
    this.x = x;
    this.y = y;
  }
}

function BuatElementSel(gridElement) {
  /*

  fungsi untuk membuat div dengan id sel sebanyak grid^2
  
  */
  let sel2 = [];

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const sel = document.createElement("div");
    sel.classList.add("sel");
    gridElement.append(sel);
  }
  return sel2;
}
