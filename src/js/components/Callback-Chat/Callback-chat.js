import "../../../css/callback-chat.css";

export default class CallbackChatWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static getCallbackChatMarkup() {
    return `
            <span class="action-circle"></span>
            <div class="chat-container">
                <span class="chat-remover">X</span>
                <h3 class="chat-title">Напишите нам</h3>
                <textarea class="chat-textarea" placeholder="Напишите нам..."></textarea>
                <button class="send-btn" type="button">Отправить</button>
            </div>
        `;
  }

  init() {
    this.parentEl.insertAdjacentHTML(
      "beforeend",
      CallbackChatWidget.getCallbackChatMarkup(),
    );

    this.actionCircleEl = this.parentEl.querySelector(".action-circle");
    this.chatContainer = this.parentEl.querySelector(".chat-container");
    this.chatRemover = this.parentEl.querySelector(".chat-remover");

    this.addListeners();
  }

  addListeners() {
    this.actionCircleEl.addEventListener("click", this.onClickCircle);
    this.chatRemover.addEventListener("click", this.onRemoverClick);
  }

  onClickCircle = () => {
    this.chatContainer.classList.add("active-chat");
    this.actionCircleEl.classList.add("disabled-circle");
  };

  onRemoverClick = () => {
    this.chatContainer.classList.remove("active-chat");
    this.chatContainer.classList.add("disabled-chat");

    this.actionCircleEl.classList.remove("disabled-circle");
    this.actionCircleEl.classList.add("active-circle");

    setTimeout(() => {
      this.chatContainer.classList.remove("disabled-chat");
    }, 1000);
    setTimeout(() => {
      this.actionCircleEl.classList.remove("active-circle");
    }, 1000);
  };
}
