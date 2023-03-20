import { MyComponent } from ".";
import React from "react";
import { Meta} from "@storybook/react/types-6-0";

export default {
  title: 'MyComponent',
} as Meta;

export const Index = () => <MyComponent />