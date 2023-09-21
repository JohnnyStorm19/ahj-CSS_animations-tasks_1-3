import "../../../css/liker.css";

export default class Liker {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.animationClasses = ["float-left", "float-right", "float-center"];
  }

  static getLikerMarkup() {
    return `
            <div class="liker-container">
                <button class="liker-btn" type="button" name="Like">Like
                </button>
                <span class="heart">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">
                    <defs></defs>
                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                        <path d="M 7.486 13.502 c 9.982 -9.982 26.165 -9.982 36.147 0 L 45 14.869 l 0 0 c 6.895 22.882 6.259 47.092 0 72.294 L 26.927 69.089 c 0 0 0 0 0 0 l -19.44 -19.44 C -2.495 39.667 -2.495 23.484 7.486 13.502 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,73,62); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path d="M 82.514 13.502 c -9.982 -9.982 -26.165 -9.982 -36.147 0 L 45 14.869 l 0 0 v 72.294 l 18.073 -18.073 c 0 0 0 0 0 0 l 19.44 -19.44 C 92.495 39.667 92.495 23.484 82.514 13.502 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(215,90,74); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    </g>
                    </svg>
                </span>
            </div>
        `;
  }

  init() {
    this.parentEl.insertAdjacentHTML("beforeend", Liker.getLikerMarkup());

    this.likerContainerEl = this.parentEl.querySelector(".liker-container");
    this.likerBtn = this.likerContainerEl.querySelector(".liker-btn");
    this.heartEl = this.likerContainerEl.querySelector(".heart");

    this.addListeners();
  }

  addListeners() {
    this.likerBtn.addEventListener("click", this.onLikerClick);
  }

  onLikerClick = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(
      Math.random() * this.animationClasses.length,
    );
    const cloneEl = this.heartEl.cloneNode(true);

    this.likerContainerEl.append(cloneEl);
    cloneEl.classList.add(this.animationClasses[randomNumber]);

    setTimeout(() => {
      cloneEl.remove();
    }, 1500);
  };
}
