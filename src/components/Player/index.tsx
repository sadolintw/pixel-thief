import { Image } from "../Image";
import thiefGif from "../../images/thief.gif";
import { PlayerActorType } from "../../machines/playerMachine/types";
import { useActor } from "@xstate/react";

interface PropsType {
  actor: PlayerActorType
}

export const Player = ({ actor }: PropsType) => {
  const [state, send] = useActor(actor);
  return <Image src={thiefGif} />;
}