import styled, { createGlobalStyle } from 'styled-components';
import { respondMin } from './RepondQuery';

// apply fonts globally
// after puts a transparent layer
export const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Roboto', sans-serif;
	}
	body,  
	html {
		margin: 0;
		padding: 0;
		height: 100vh;
		background-image: url('https://wallpaperplay.com/walls/full/6/a/d/3092.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		&:after {
			content: "";
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			position: absolute;
			background: rgba(0,0,0,.5);
			z-index: 0;
		}
	}

`;
// apply style in App.js
export const AppGlobal = styled.div`
	padding: 5px;
	
	${respondMin.md`
		padding-left: 100px;
	`}
`;
