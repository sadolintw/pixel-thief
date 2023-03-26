import { Image } from "../Image";
import thiefGif from "../../images/thief.gif";
import { PlayerActorType } from "../../machines/playerMachine/types";
import { useActor } from "@xstate/react";
import { coordsToPosition } from "../../util/coordsToPosition";
import styled from "styled-components";
import { usePlayerControls } from "../../hooks/usePlayerControls";
import { DirectionType } from "../../types";

const Layout = styled.div`
  position: absolute;
`;

interface PropsType {
  actor: PlayerActorType
}

export const Player = ({ actor }: PropsType) => {
  const [state, send] = useActor(actor);
  usePlayerControls({
    handleArrowUp: () => send({ type: "ARROW_BUTTON_CLICKED", direction: DirectionType.UP }),
    handleArrowDown: () => send({ type: "ARROW_BUTTON_CLICKED", direction: DirectionType.DOWN }),
    handleArrowLeft: () => send({ type: "ARROW_BUTTON_CLICKED", direction: DirectionType.LEFT }),
    handleArrowRight: () => send({ type: "ARROW_BUTTON_CLICKED", direction: DirectionType.RIGHT }),
  })
  const { coords } = state.context;
  const position = coordsToPosition(coords)

  return (
    <Layout style={{ left: position[0], top: position[1] }}>
      <Image src={thiefGif} alt="thief" />;
    </Layout>
  )
}