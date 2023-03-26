import { createMachine } from "xstate";
import { GameEventType, GameStateType } from "./types";

export const gameMachine = createMachine<null, GameEventType, GameStateType>({
	/** @xstate-layout N4IgpgJg5mDOIC5RQIYFswDoAWB7DAxAMoAqAggEokD6AQgKokkDyActQMIAyAkhwNIBRACIBtAAwBdRKAAOuWAEsALotwA7GSAAeiAIwA2AKyYAnOfMAOACynrl8QHZx1gDQgAnokunMlx7amAEzW1nqOevYAvlHuqBiYsgA2KB6K6lAEAApcZACaghTUwjwiEtJIIPJKqhpaughGRkFm4gYhpuKWAMy29u5eCHrdLeJj4npd4QbWQUYGMXHoWMmp6Zk5+YXUAOLMNCQUgmRE9EflWtUqapqVDU0tne22Xb12lgP6li1G40GG3WaliMeiCixA8SwkOYADcwAAnAhHUiUGgMJhsTi8ARlKSXBTXOp3RAPVrPTo9PofTzePSYIzgyGYSEcfDJMDKMAEAASzAAsoI6IwWOxuHwhGI8ZUrrVbqB7gFMEFjO0bAYfO09J8EEFut1MONxCNrM1go4DAtwepcBA4FpIfiajd6ogALQGbXuxnLHD4MCOwlynSIWba0yWTAmnpBRxGRyOcPAxzehKrNIZAOyl0IMIRp5zcRGSyWdXxsPiTDdWMTIKmAwRNrWZOxCE+6Fw+GZ53EhDfayYUu-c0OboW8sGnp6kGjmNVy1LBIstlJDn+6UErM9vsD-xD9VGsc0obF+mT+bxvRNHwxGJAA */
	id: "game",
	initial: "home",
	states: {
		home: {
			on: {
				START_BUTTON_CLICKED: "playing"
			}
		},
		playing: {
			on: {
				PLAYER_DIED: "gameOver",
				PLAYER_GOT_TREASURE: "gameComplete"
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