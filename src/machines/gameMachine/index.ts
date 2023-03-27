import { createMachine } from "xstate";
import { playerMachine } from "../playerMachine";
import { GameEventType, GameStateType } from "./types";

export const gameMachine = createMachine<null, GameEventType, GameStateType>({
	/** @xstate-layout N4IgpgJg5mDOIC5RQIYFswDoAWB7DAxAMoAqAggEokD6AQgKokkDyActQMIAyAkhwNIBRACIBtAAwBdRKAAOuWAEsALotwA7GSAAeiAIwA2AKyYAnOfNGAHEfFGAzAHZTjgDQgAnoit7MAFgtzYz89ACYDP0cAXyj3VAxMWQAbFA9FdSgCAAUuMgBNQQpqYR4RCWkkEHklVQ0tXQQ9PSd-AytHPyNQ01D7UyN3LwQHUMwOoL12vXErPwMYuPQsZNT0zJz8wuoAcWYaEgpBMiJ6Q-KtapU1TUqGppa59s7u3v7BxGt7TFCA0z97XrTOZ6BYgeLLFJpDKYJJgABuYCSemyuQKRQA6mQuEJhNQSAAJCjMejbfHFZjMCjnSqXWo3UANUKGTDiVmspwzGyOexWd7DRzifwWAziewGJlWUz2UHgxKQtYw+GI0IozYYrE4vGE4mk8mU6lyBRXOq3RDGUzfez-ULc2wClx8owCoVBUXiyZSmVLTDg5gIgBOBEOpEoNAYTDYnF4AjKUguRrp9X0zUcrSeXR6fQGnkQfisox+5isdiaYWlsTB3vBHHwyTAyjABHxzAAsoI6IwWOxuHwcQaqgnrknhqE+Y4md9fkYgUyBSDQepcBA4FpwfGakPTQgALQGPnbkyBI9H8uLBJ4DDr430nS50c5hCmQUzez2PR-UXiG0OL0JFZQqAr0TLcAj5f5DwsHxxD0PxOXEeYK1lf8FVhBEkSAzcGUQB0HydQVAlCSVCNMJpokQ71kOhVDlQwk0sOGWDLX+Pp7GsAImkdZ0CKIyVSN-CFViopUknsWibwaUwrC+R4DD+Zj3U4-CLGI4i+PIhJfQDMThxg8QLVCWwvzzZo5kiMCn0wKTX2mblHEcKy-H4n0lhrNA6wbbSt2aHxMD6cRHGmGxzDCPdcMlXzXxtK0nQFYwYhiIA */
	id: "game",
	initial: "home",
	states: {
		home: {
			on: {
				START_BUTTON_CLICKED: "playing"
			}
		},
		playing: {
			invoke: {
				id: "playerActor",
				src: playerMachine
			},
			on: {
				PLAYER_DIED: "gameOver",
				PLAYER_GOT_TREASURE: "gameComplete"
			},
			initial: "level1",
			states: {
				level1: {
					on: {
						PLAYER_WALKED_THROUGH_DOOR: "level2"
					}
				},
				level2: {
					on: {
						PLAYER_WALKED_THROUGH_DOOR: "level3"
					}
				},
				level3: {}
			}
		},
		gameOver: {
			on: {
				RESTART_BUTTON_CLICKED: "playing"
			}
		},
		gameComplete: {
			on: {
				HOME_BUTTON_CLICKED: "home"
			}
		}
	}
})