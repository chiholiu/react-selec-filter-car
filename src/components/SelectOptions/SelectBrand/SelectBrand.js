import React from 'react';
import { SelectComponent } from '../../../styles/SelectOptions';
import PropTypes from 'prop-types';

export const SelectBrand = ({
	brand,
	filteredData,
	onChangeEvent
}) => {
	return (
		<SelectComponent onChange={onChangeEvent} value={brand}>
			<option value=''>Select brand</option>
			{filteredData && filteredData.map((obj, index) => (
				<option key={index} value={obj.brand}>
					{obj.brand}
				</option>
			))}
		</SelectComponent>
	);
};

SelectBrand.propTypes = {
	brand: PropTypes.string,
	filteredData: PropTypes.array,
	onChangeEvent: PropTypes.func,
};
