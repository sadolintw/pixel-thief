import { useMachine } from "@xstate/react";
import { gameMachine } from "../../machines/gameMachine";
import { Button } from "../Button";
import level1BackgroundPng from "../../images/level1Background.png";
import level2BackgroundPng from "../../images/level2Background.png";
import level3BackgroundPng from "../../images/level3Background.png";
import { LevelBackgroundImage } from "../LevelBackgroundImage";
import { Grid } from "../Grid";
import { HomeScreen } from "../HomeScreen";
import { GameEventType } from "../../machines/gameMachine/types";
import { useEffect } from "react";
import { GameOverScreen } from "../GameOverScreen";
import { GameCompleteScreen } from "../GameCompleteScreen";
import { Player } from "../Player";

interface PropsType {
  fastForwardEvents?: GameEventType[]
}

export const Game = ({ fastForwardEvents }: PropsType) => {
  const [state, send] = useMachine(gameMachine);
  const { playerActor } = state.children

  useEffect(() => {
    if (fastForwardEvents) {
      fastForwardEvents.forEach((event: GameEventType) => send(event))
    }

  }, [fastForwardEvents, send])

  if (state.matches("home")) {
    return (
      <>
        <HomeScreen onStartGameButtonClick={() => send("START_BUTTON_CLICKED")} />
      </>
    )
  }
  if (state.matches("playing")) {
    let conponent = <>{state.value}</>;
    if (state.matches("playing.level1")) {
      conponent =
        <>
          <LevelBackgroundImage src={level1BackgroundPng} alt="level1Background" />
          <Grid>
            {playerActor && <Player actor={playerActor} />}
          </Grid>
        </>
    }
    if (state.matches("playing.level2")) {
      conponent =
        <>
          <LevelBackgroundImage src={level2BackgroundPng} alt="level2Background" />
          <Grid>
            {playerActor && <Player actor={playerActor} />}
          </Grid>
        </>
    }
    if (state.matches("playing.level3")) {
      conponent = <>
        <LevelBackgroundImage src={level3BackgroundPng} alt="level3Background" />
        <Grid>
            {playerActor && <Player actor={playerActor} />}
          </Grid>
      </>
    }
    return conponent;
  }
  if (state.matches("gameOver")) {
    return (
      <>
        <GameOverScreen onRestartButtonClick={() => send("RESTART_BUTTON_CLICKED")} />
      </>
    )
  }
  if (state.matches("gameComplete")) {
    return (
      <>
        <GameCompleteScreen onGoHomeButtonClick={() => send("HOME_BUTTON_CLICKED")} />
      </>
    )
  }

  throw Error(`Invalid state ${state.value}`)
};