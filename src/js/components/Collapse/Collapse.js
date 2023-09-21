import "../../../css/collapse.css";

export default class CollapseWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static getCollapseMarkup() {
    return `
            <div class="collapse-container">
                <button class="collapse-btn" type="button">Collapse</button>
                <div class="collapse-content-container">
                    <div class="collapse-content">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <span class="copy">Copy</span>
                <span class="copy-tooltip">Copied to the clipboard</span>
            </div>
        `;
  }

  init() {
    this.parentEl.insertAdjacentHTML(
      "beforeend",
      CollapseWidget.getCollapseMarkup(),
    );

    this.collapseBtn = this.parentEl.querySelector(".collapse-btn");
    this.collapseContentContainer = this.parentEl.querySelector(
      ".collapse-content-container",
    );
    this.collapseContent = this.parentEl.querySelector(".collapse-content");
    this.copySpanEl = this.parentEl.querySelector(".copy");
    this.copyTooltipEl = this.parentEl.querySelector(".copy-tooltip");

    this.addListeners();
  }

  addListeners() {
    this.collapseBtn.addEventListener("click", this.onCollapse);
    this.copySpanEl.addEventListener("click", this.onCopy);
  }

  onCollapse = (e) => {
    e.preventDefault();
    this.collapseContentContainer.classList.toggle("collapsed");
  };

  onCopy = () => {
    if (!this.collapseContentContainer.classList.contains("collapsed")) {
      return;
    }
    const copyText = this.collapseContent.textContent;
    navigator.clipboard.writeText(copyText);

    this.copyTooltipEl.style.opacity = 1;

    // * возможно здесь есть более изящное решение и без асинхронной функции. Но пока только это пришло в голову
    setTimeout(() => {
      this.copyTooltipEl.style.opacity = 0;
    }, 1500);
  };
}
