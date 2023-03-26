import { Heading } from "../Heading"
import { MenuScreen } from "../MenuScreen"
import skullGif from "../../images/skull.png"
import { ImageSizeType } from "../Image"
import { Image } from "../Image"
import { Button } from "../Button"

interface PropsType {
  onRestartButtonClick: () => void
}

export const GameOverScreen = ({ onRestartButtonClick }: PropsType) => {
  return <MenuScreen>
    <Heading>
      Game Over
    </Heading>
    <Image src={skullGif} alt="skull" size={ImageSizeType.Large} />
    <Button onClick={onRestartButtonClick}>
      Restart Game
    </Button>
  </MenuScreen>
}