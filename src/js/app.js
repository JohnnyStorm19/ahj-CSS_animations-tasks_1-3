import WidgetsController from "./components/widgets-controller";

const container = document.querySelector(".container");

const widgetsController = new WidgetsController(container);
widgetsController.init();
