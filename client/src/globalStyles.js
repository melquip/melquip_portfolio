import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*, *:before, *:after {
  box-sizing: border-box;
}

.inner {
  display: block;
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
}

.flex {
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  flex-shrink: 1;
  &.nowrap {
    flex-wrap: nowrap;
  }
  & > .col {
    width: 100%;
  }
  & > .col-2 {
    max-width: calc(100% / 2);
    flex-basis: calc(100% / 2);
  }
  & > .col-3 {
    max-width: calc(100% / 3);
    flex-basis: calc(100% / 3);
  }
  & > .col-4 {
    max-width: calc(100% / 4);
    flex-basis: calc(100% / 4);
  }
  & > .col-5 {
    max-width: calc(100% / 5);
    flex-basis: calc(100% / 5);
  }
}
`;