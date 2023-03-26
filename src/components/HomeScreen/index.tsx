import { Heading } from "../Heading"
import { MenuScreen } from "../MenuScreen"
import thiefGif from "../../images/thief.gif"
import { ImageSizeType } from "../Image"
import { Image } from "../Image"
import { Button } from "../Button"

interface PropsType {
  onStartGameButtonClick: () => void
}

export const HomeScreen = ({ onStartGameButtonClick }: PropsType) => {
  return <MenuScreen>
    <Heading>
      Pixel Thief
    </Heading>
    <Image src={thiefGif} alt="thief" size={ImageSizeType.Large} />
    <Button onClick={onStartGameButtonClick}>
      Start Game
    </Button>
  </MenuScreen>
}