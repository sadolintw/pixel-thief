import { createMachine } from "xstate";
import { PlayerStateType } from "./types";

export const playerMachine = createMachine<any, any, PlayerStateType>({
  id: "player",
  initial: "alive",
  states: {
    alive: {},
    dead: {}      
  }
});