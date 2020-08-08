import React from 'react';
import { SelectComponent, Option } from '../../../styles/SelectOptions';
import PropTypes from "prop-types";

export const SelectVehicle = ({
	vehicle, 
	uniqueTypes,
	onChangeEvent
}) => {
	return (
		<SelectComponent onChange={onChangeEvent} value={vehicle}>
			<Option value="">Select vehicle</Option>
			{uniqueTypes && uniqueTypes.map((obj, index) => (
				<Option key={index} value={obj}>
					{obj}
				</Option>
			))}
		</SelectComponent>
	);
};

SelectVehicle.propTypes = {
	vehicle: PropTypes.string,
	uniqueTypes: PropTypes.array,
	onChangeEvent: PropTypes.func,
};