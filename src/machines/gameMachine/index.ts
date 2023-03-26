import { createMachine } from "xstate";
import { playerMachine } from "../playerMachine";
import { GameEventType, GameStateType } from "./types";

export const gameMachine = createMachine<null, GameEventType, GameStateType>({
	/** @xstate-layout N4IgpgJg5mDOIC5RQIYFswDoAWB7DAxAMoAqAggEokD6AQgKokkDyActQMIAyAkhwNIBRACIBtAAwBdRKAAOuWAEsALotwA7GSAAeiAIwA2AKyYAnOfPiALAHZxNq7YMAaEAE9EADj2YrF8wDM1uKeAEziRgC+ka6oGJiyADYoborqUAQAClxkAJqCFNTCPCIS0kgg8kqqGlq6CHp6ATa+Bp42RuIGpuKhRg6uHghGAaGYHeKToQahpkahntGx6FhJKWkZ2XkF1ADizDQkFIJkRPTHZVpVKmqaFfWNza3tnd29-VaDiEaeAZh9ky6NgCAScixiIDiq2SqXSmESYAAbmBEnosjl8oUAOpkLhCYTUEgACQozHouyJRWYzAolwq1xqd1A9VChkwgMmnmsoRsPM8n3c3zsvgs7VMYT0wICS0hKwSMI28KRKNC6O22Nx+MJJLJFKpNLpcgUN1q90QxlM-1BVgivMcBmBX2Gwr85jFEqlMqhmChzGRACcCMdSJQaAwmGxOLwBKUpFdjYy6vomi0rG0Jm8+gNBQgrGF-q7xfMjP1TKEvXKoRx8EkwMowAQicwALKCOiMFjsbh8fGGyoJ25J4ahJ28nyhQuTUF6JzRCHqXAQOBaKHx6qDs0IAC0LhzW5M-kPh+lEO9eAwa5NTJ0iCsI5zPXZvxBpkl7VBJYr8TWsKgl8Tm5+E6VgBAY7IcqCITiEE4LLN+CpwgiyKov+G7Mogpg2E6-TiGYoo2OKrKeqeco-oqSEqqhprocMNpWiBmFtJKASmAE2HCv47pESCX7QusiHKokARUde9Tin8abtAYvR6HMegTuxuGcQRHo8SR8S+gGIlDjO4iWhO5gzLY1g2J4wGPs+owhAsE6eMYvE+is1ZoLW9baZuTTeJgLFdM0PwdAYtjYZ4logiCNoTFyehRHOQA */
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