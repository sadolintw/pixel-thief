import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"


export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: VCR_OSD_MONO;
    src: url(s{VCR_OSD_MONO});
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    color: ${theme.color.white} !important;
    background: ${theme.color.black}
  }

  #root {
    width: 100%;
    min-height: 100vh;
    
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-size: ${theme.fontSize[0]};
    font-family: ${theme.fontFamily};
    line-height: 1.4;
  }

  ul {
    list-style: none;
  }

  image {
    display: block;
  }

  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  };

  [disabled] {
    pointer-events: none;
  }

  :focus {
    outline: 1px solid ${theme.color.focus};
  }
`