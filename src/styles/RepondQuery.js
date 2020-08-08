import { css } from 'styled-components';
import { breakpointsMax, breakpointsMin } from './BreakPoints';

// convert to reusable breakpoints max-width
export const respondMax = Object.keys(breakpointsMax).reduce((accumulator, label) => {
	// label : xs sm md lg
	// place to change to alter max-width
	accumulator[label] = (...args) => css`
        @media (max-width: ${breakpointsMax[label]}) {
            ${css(...args)};
        }
    `;
	return accumulator;
}, {});

// convert to reusable breakpoints min-width
export const respondMin = Object.keys(breakpointsMin).reduce((accumulator, label) => {
	// label : xs sm md lg
	// place to change to alter min-width
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpointsMin[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});
