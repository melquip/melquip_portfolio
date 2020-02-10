import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
${props => props.theme.preload.map(url => '@import url("' + url + '");')}
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
  font-family: ${props => props.theme.fonts.primary};
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
  outline: 0;
}
img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  border: 0;
  appearance: none;
  background-color: transparent;
}
section {
  padding: 4rem 0;
}

h1 {
  margin-left: -0.05em;
  font-size: 5rem;
  font-family: ${props => props.theme.fonts.secondary};
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.purple};
  background: ${props => props.theme.colors.white};
}


.inner {
  display: block;
  width: 100%;
  margin: 0 auto;
  max-width: 280px;
  @media ${props => props.theme.mediaTiny} {
    max-width: 320px;
  }
  @media ${props => props.theme.mediaMobile} {
    max-width: 420px;
  }
  @media ${props => props.theme.mediaTablet} {
    max-width: 620px;
  }
  @media ${props => props.theme.mediaDesktop} {
    max-width: 900px;
  }
  @media ${props => props.theme.mediaLarger} {
    max-width: 1024px;
  }
}

.flex {
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-between; 
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

.button {
  display: inline-block;
  margin-top: 1rem;
  padding: .7rem 1rem;
  background-color: ${props => props.theme.colors.lightgray};
  color: ${props => props.theme.colors.purple};
  transition: all .2s ease-in-out;
}


svg#pageTitle {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

.slick-dots li button:before, .slick-dots li.slick-active button:before {
  font-size: .65rem;
  color: ${props => props.theme.colors.blue};
}

.dashboardPaper {
  width: '100%';
  overflow-x: auto;
}

.dashboardTable {
  min-width: 650px;
}
`;