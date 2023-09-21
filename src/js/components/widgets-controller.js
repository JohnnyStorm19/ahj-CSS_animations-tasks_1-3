import CallbackChatWidget from "./Callback-Chat/Callback-chat";
import CollapseWidget from "./Collapse/Collapse";
import Liker from "./Liker/Liker";

export default class WidgetsController {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.getCollapseWidget();
    this.getCallbackChatWidget();
    this.getLikerWidget();
  }

  getCollapseWidget() {
    const collapseWidget = new CollapseWidget(this.container);
    collapseWidget.init();
  }

  getCallbackChatWidget() {
    const callBackChatWidget = new CallbackChatWidget(this.container);
    callBackChatWidget.init();
  }

  getLikerWidget() {
    const likerWidget = new Liker(this.container);
    likerWidget.init();
  }
}
