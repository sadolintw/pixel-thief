import { createMachine } from "xstate";
import { assign, choose, log } from "xstate/lib/actions";
import { PLAYER_STARTING_COORDS } from "../../constants";
import { getTargetCoords } from "../../util/getTargetCoords";
import { isCoordsOnGrid } from "../../util/isCoordsOnGrid";
import { PlayerContextType, PlayerEventType, PlayerStateType } from "./types";

export const playerMachine = createMachine<
  PlayerContextType,
  PlayerEventType,
  PlayerStateType>(
    {
      /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAcAbAQwE8wAnfEArWASwBcGsMaAPRAWgDZ0yPXgDoADOImTJAdmRpapCpWEkiDAG5gadRizadEAFgBMAxAA4AjMMMBOe7YCsjgMy3Rj84+Nz0xclTCuCQQ2vTMrOxIIFwIJmYIlm7CDvbGjtLmvJbmPnLIQA */
      context: {
        coords: PLAYER_STARTING_COORDS
      },
      id: "player",
      initial: "alive",
      states: {
        alive: {
          on: {
            ARROW_BUTTON_CLICKED: {
              actions: `onArrowButtonClicked`,
              // actions: log()
            },

          }
        },
        dead: {}
      }
    },
    {
      actions: {
        onArrowButtonClicked: choose([
          {
            cond: 'isSquareAvailable',
            actions: 'move'
          }
        ]),
        move: assign((context: PlayerContextType, event: PlayerEventType) => {
          const { coords } = context;
          const { direction } = event;
          const targetCords = getTargetCoords({ coords, direction });

          return {
            coords: targetCords
          }
        })
      },
      guards: {
        isSquareAvailable: (context: PlayerContextType, event: PlayerEventType) => {
          if (event.type === "ARROW_BUTTON_CLICKED") {
            const { coords } = context;
            const { direction } = event;
            const targetCords = getTargetCoords({ coords, direction });

            return isCoordsOnGrid(targetCords)
          }

          return false
        }
      }
    });