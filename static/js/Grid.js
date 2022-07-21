const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

export default class Grid {
  #sel2;

  /*untuk set variabel css */
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);

    this.#sel2 = BuatElementSel(gridElement).map((elementSel, index) => {
      return new Sel(
        elementSel,
        index % GRID_SIZE,
        Math.floor(index / GRID_SIZE)
      );
    });
  }

  get #selKosong() {
    return this.#sel2.filter((sel) => sel.tile == null);
  }
  selAcakKosong() {
    const indexAcak = Math.floor(Math.random() * this.#selKosong.length);
    return this.#selKosong[indexAcak];
  }
}

class Sel {
  #elementSel;
  #x;
  #y;
  #tile;
  constructor(elementSel, x, y) {
    this.#elementSel = elementSel;
    this.#x = x;
    this.#y = y;
  }

  get tile() {
    return this.#tile;
  }

  set tile(value) {
    this.#tile = value;
    if (value == null) return;
    this.#tile.x = this.#x;
    this.#tile.y = this.#y;
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
    sel2.push(sel);
    gridElement.append(sel);
  }
  return sel2;
}
