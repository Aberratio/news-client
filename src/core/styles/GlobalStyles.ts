import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Cabin', sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: black;
        background-color: white;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        scroll-behavior: smooth !important;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, acronym, address, big, cite, code,
    del, dfn, em, font, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        font-size: 100%;
        font-family: inherit;
        vertical-align: baseline;
    }

    :focus-visible {
      outline: 3px solid ${({ theme }) => theme.customTheme.general.primaryColor};
      outline-offset: 3px;
    }

    body {
      line-height: 1.5;
      min-width: 320px;
      min-height: 100vh;

      background: #fafafa;
      background: -webkit-linear-gradient(to right, #FFFFFF, #fafafa);
      background: linear-gradient(to right, #FFFFFF, #fafafa);
    }

    .font-spectral {
      font-family: 'Spectral', Georgia, 'Times New Roman', serif;
    }

    html {
      overflow-y: scroll;
    }

    img,
    picture,
    svg,
    video,
    canvas {
      display: block;
      max-width: 100%;
    }

    button,
    input,
    textarea,
    select {
      font: inherit;
    }

    ol, ul {
      list-style: none;
    }

    table {
      border-collapse: separate;
      border-spacing: 0;
    }

    caption, th, td {
      text-align: left;
      font-weight: normal;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: "";
    }

    blockquote, q {
      quotes: "" "";
    }

    a {
      color: inherit;
      text-decoration-thickness: 0.08em;
      text-underline-offset: 0.18em;
      cursor: pointer;
    }
`;
