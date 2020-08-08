import { css } from 'styled-components';
import { breakpoints } from './BreakPoints';

// convert to reusable breakpoints
export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
	// label : xs sm md lg
	// place to change to alter max-width/ min-width 
	accumulator[label] = (...args) => css`
		@media (max-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

