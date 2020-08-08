import React from 'react';
import { 
	HeadingOne, 
	Paragraph, 
	ValueContainer, 
	ValueBlock 
} from '../../styles/SelectOptions';
import PropTypes from 'prop-types';

export const SelectedValues = ({
	curSelectVehicle,
	curSelectBrand,
	curSelectColor
}) => {
	return (
		<ValueContainer>
			<ValueBlock>
				<HeadingOne>Selected Vehicle</HeadingOne>
				<Paragraph data-testid="select-vehicle">{curSelectVehicle}</Paragraph>
			</ValueBlock>

			<ValueBlock> 
				<HeadingOne>Selected Brand</HeadingOne>
				<Paragraph data-testid="select-brand">{curSelectBrand}</Paragraph>
			</ValueBlock>

			<ValueBlock>
				<HeadingOne>Selected Color</HeadingOne>
				<Paragraph data-testid="select-color">{curSelectColor}</Paragraph>
			</ValueBlock>
		</ValueContainer>
	);
};

SelectedValues.propTypes = {
	curSelectVehicle: PropTypes.any,
	curSelectBrand: PropTypes.any,
	curSelectColor: PropTypes.any
};
