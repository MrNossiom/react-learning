import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}

	body {
		background-color: #1b1b1b;
	}

	button {
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		padding: 1rem 2rem;
		border: 3px solid #23d997;
		color: white;
		background-color: inherit;
		transition: all .5s ease;

		&:hover {
			background-color: whitesmoke;
			color: #1b1b1b;
		}
	}

	h2 {
		font-weight: lighter;
		font-size: 4rem;
	}

	h3 {
		color: white;
	}

	h4 {
		font-weight: bold;
	}

	a {
		font-size: 1.1rem;
	}

	span {
		font-weight: bold;
		color: #23d997;
	}

	p{
		padding: 3rem 0rem;
		color: #ccc;
		font-size: 1.4rem;
	}
`;

export default GlobalStyle;
