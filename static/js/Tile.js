export default class Tile {
  #ElemenTile;
  #x;
  #y;
  constructor(KontainerTile, value = Math.random() > 0.5 ? 2 : 4) {
    this.#ElemenTile = document.createElement("div");
    this.#ElemenTile.classList.add("tile");
    KontainerTile.append(this.#ElemenTile);
    this.value = value;
  }
  set x(value) {
    this.#x = value;
    this.#ElemenTile.style.setProperty("--x", value);
  }

  set y(value) {
    this.#y = value;
    this.#ElemenTile.style.setProperty("--y", value);
  }
}
