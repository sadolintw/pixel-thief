import { createMachine } from "xstate";
import { playerMachine } from "../playerMachine";
import { GameEventType, GameStateType } from "./types";

export const gameMachine = createMachine<null, GameEventType, GameStateType>({
	/** @xstate-layout N4IgpgJg5mDOIC5RQIYFswDoAWB7DAxAMoAqAggEokD6AQgKokkDyActQMIAyAkhwNIBRACIBtAAwBdRKAAOuWAEsALotwA7GSAAeiAIwA2AKyYAnOfMAmA+MuW9ADksAWADQgAnogd7MR8QGGAMyWDj5BEQC+ke6oGJiyADYoHorqUAQAClxkAJqCFNTCPCIS0kgg8kqqGlq6CHp6QQDsmM4GDs16RkbNzUEOxu5eCEb2mAGTpg7ODqYdetGx6FhJKWkZ2XkF1ADizDQkFIJkRPTHZVpVKmqaFfWNLW0dXT19A0OeiL2+zhbNziMBj0zUspiWIDiq2SqXSmESYAAbmBEnosjl8oUAOpkLhCYTUEgACQozHouyJRWYzAolwq1xqd1A9XsJgsVhsdkcLmG30sQTa7PsTXmDghUISMI28KRKMs6O22Nx+MJJLJFKpNLpcgUN1q90QxlMmH5ziCRmc4jmDlsQV5o35goswqCovFK0wUOYyIATgRjqRKDQGEw2JxeAJSlIrrrGXV9E1Wu1Ot1ev1BkZ7c5muIneYZsYgpbmkZ3fEoRx8EkwMowAQicwALKCOiMFjsbh8fHayqx27xh32gwAk3+WyNZx6VmLCHqXAQOBaKEx6r9g0IAC0BntW4mk33B-EzTLWDwGBXeqZOkQzks9tMuatER6zlmxg6J8l63SF7j67+WZBAYe6TGafQBCWn5rLCUAysiqK-muzKIKYzT2mMArsqYLrzM04IxJCHrQdKCLwZYiH6shoyWiaRZAXoswljMejoY6WE4R+BESsRcKkSiQQUVe9TTAKyagmCJaGE4rGYUKjxulxHper6gkDgx4jGi45h9JaRYGAMWZ4RMDgRJO2avvyM7LOWKyVmg1a1qp65ND4mCuuIRjzKYQQMbebhfKMfR+CZQQaXh-LPtE0RAA */
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