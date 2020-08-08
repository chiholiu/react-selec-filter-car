import React from 'react';
import { SelectComponent } from '../../../styles/SelectOptions';
import PropTypes from 'prop-types';

export const SelectColor = ({ 
	color, 
	uniqueColors, 
	onChangeEvent
}) => {
	return (
		<SelectComponent onChange={onChangeEvent} value={color}>
			<option value=''>Select color</option>
			{uniqueColors && uniqueColors.map((obj, index) => (
				<option key={index} value={obj}>
					{obj}
				</option>
			))}
		</SelectComponent>
	);
};

SelectColor.propTypes = {
	color: PropTypes.string,
	uniqueColors: PropTypes.array,
	onChangeEvent: PropTypes.func,
};