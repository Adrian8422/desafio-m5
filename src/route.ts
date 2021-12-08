import { initWelcomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";
import { initGamePage } from "./pages/game";
import { initInGamePage } from "./pages/in-game";
import { initWinnerPage } from "./pages/winner";
import { initLosePage } from "./pages/lose";

const routes = [
  {
    path: /\/desafio-m5/,
    component: initWelcomePage,
  },
  {
    path: /\/welcome/,
    component: initWelcomePage,
  },
  {
    path: /\/instructions/,
    component: initInstructionsPage,
  },
  {
    path: /\/game/,
    component: initGamePage,
  },
  {
    path: /\/in-game/,
    component: initInGamePage,
  },
  {
    path: /\/winner/,
    component: initWinnerPage,
  },
  {
    path: /\/lose/,
    component: initLosePage,
  },
];

export function initRouter(container: any) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    console.log("el handle route cambió", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  if (location.host.includes("github.io")) {
    goTo("/desafio-m5");
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
