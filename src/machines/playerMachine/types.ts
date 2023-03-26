import { ActorRef } from "xstate"

export type PlayerStateType = {
  context: null,
  value: "alive" | "dead",
}

export type PlayerActorType = ActorRef<any, PlayerStateType>