import { Meta } from "@storybook/react/types-6-0";
import { GameCompleteScreen } from ".";

export default {
  title: `Menu Screens/GameCompleteScreen`
} as Meta

const mockFunction = () => {}

export const Index = () => {
  return <GameCompleteScreen onGoHomeButtonClick={mockFunction} />;
}