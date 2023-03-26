import { Heading } from "../Heading"
import { MenuScreen } from "../MenuScreen"
import treasurePng from "../../images/treasure.png"
import { ImageSizeType } from "../Image"
import { Image } from "../Image"
import { Button } from "../Button"

interface PropsType {
  onGoHomeButtonClick: () => void
}

export const GameCompleteScreen = ({ onGoHomeButtonClick }: PropsType) => {
  return <MenuScreen>
    <Heading>
      Quest Complete!
    </Heading>
    <Image src={treasurePng} alt="treasure" size={ImageSizeType.Large} />
    <Button onClick={onGoHomeButtonClick}>
      Go Home
    </Button>
  </MenuScreen>
}