import "@fontsource/roboto";
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

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
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
        overflow: hidden;
    }

    :focus {
      outline: 0;
    }

    body {
      line-height: 1.5;
      
      background: #fafafa;
      background: -webkit-linear-gradient(to right, #FFFFFF, #fafafa);
      background: linear-gradient(to right, #FFFFFF, #fafafa);
   
   

    }

    html {
      overflow-y: scroll;
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
      text-decoration: none;
      all: unset;
    }
`;
