import { ActorRef } from "xstate"
import { CoordsType, DirectionType } from "../../types"

export interface PlayerContextType {
  coords: CoordsType
}

export type PlayerStateType = {
  context: PlayerContextType,
  value: "alive" | "dead",
}

export type ArrowButtonClickedType = {
  type: "ARROW_BUTTON_CLICKED",
  direction: DirectionType,
}

export type PlayerEventType = ArrowButtonClickedType

export type PlayerActorType = ActorRef<any, PlayerStateType>