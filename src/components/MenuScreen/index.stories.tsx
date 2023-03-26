import { Meta } from "@storybook/react/dist/ts3.9/client/preview/types-6-0";
import { MenuScreen } from ".";

export default {
  title: `Small Components/MenuScreen`,
} as Meta

export const Index = () => <MenuScreen>
  <div>test</div>
  <div>test</div>
</MenuScreen>