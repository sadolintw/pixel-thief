import { ThemeProvider } from "styled-components"
import { theme } from "../src/styles/theme.ts"
import { GlobalStyles } from "../src/styles/GlobalStyles";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen"
}

export const decorators = [
  (Story) => <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Story />
    </>
  </ThemeProvider>
]