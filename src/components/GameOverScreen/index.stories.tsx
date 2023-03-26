import { Meta } from "@storybook/react/types-6-0";
import { GameOverScreen } from ".";

export default {
  title: `Menu Screens/GameOverScreen`
} as Meta

const mockFunction = () => {}

export const Index = () => {
  return <GameOverScreen onRestartButtonClick={mockFunction} />;
}