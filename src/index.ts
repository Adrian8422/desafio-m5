import { buttonComponent } from "./components/button";
import { initRouter } from "./route";
import { initTextTypeComp } from "./components/text";
import { initHandsPlay } from "./components/hands-play";
import { initCounterComponent } from "./components/counter";
import { initScoreComp } from "./components/score";
import { state } from "./state";
(() => {
  state.init();
  initScoreComp();
  initCounterComponent();
  initHandsPlay();
  buttonComponent();
  initTextTypeComp();
  const rootEl = document.querySelector("#root");

  initRouter(rootEl);
})();
