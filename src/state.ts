type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};
type Result = "win" | "lose";
const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: {
      gamePrevios: { win: [], lost: [] },
    },
  },
  listeners: [],
  init() {
    const localData = JSON.parse(localStorage.getItem("saved-changes"));
    if (!localData) {
      return;
    } else {
      state.setState(localData);
    }
  },

  getState() {
    const game = this.data;
    return game;
  },
  setState(newState) {
    this.data = newState;
    localStorage.setItem("saved-changes", JSON.stringify(newState));
    for (const cb of this.listeners) {
      cb();
    }
  },
  setMove(move: Jugada) {
    const currentState = this.getState().currentGame;
    currentState.myPlay = move;
    let randonNumber = Math.floor(Math.random() * 3 + 1);

    if (randonNumber == 1) {
      currentState.computerPlay = "piedra";
    } else if (randonNumber == 2) {
      currentState.computerPlay = "papel";
    } else {
      currentState.computerPlay = "tijera";
    }
  },
  pushToHistory(play: Game, result: Result) {
    const currentState = this.getState();
    if (result == "win") {
      currentState.history.gamePrevios.win.push(play);
    } else {
      currentState.history.gamePrevios.lost.push(play);
    }
    state.setState(currentState);
  },
  whoWins(myPlay, computerPlay) {
    if (myPlay == computerPlay) {
      return 2;
    }

    const winWithStone = myPlay == "piedra" && computerPlay == "tijera";
    const winWithPaper = myPlay == "papel" && computerPlay == "piedra";
    const winWithScissors = myPlay == "tijera" && computerPlay == "papel";

    const winner = [winWithStone, winWithPaper, winWithScissors].includes(true);

    const loseWithStone = myPlay == "piedra" && computerPlay == "papel";
    const loseWithPaper = myPlay == "papel" && computerPlay == "tijera";
    const loseWithScissors = myPlay == "tijera" && computerPlay == "piedra";

    const lose = [loseWithStone, loseWithPaper, loseWithScissors].includes(
      true
    );

    if (winner) {
      state.pushToHistory({ myPlay, computerPlay }, "win");
      return 0;
    }
    if (lose) {
      state.pushToHistory({ myPlay, computerPlay }, "lose");
      return 1;
    }
  },
  subscribe(callback: (any: any) => any) {
    state.listeners.push(callback);
  },
};

export { state };
