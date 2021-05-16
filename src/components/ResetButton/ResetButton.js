import React from 'react';
import { ResetBtn } from '../../styles/ResetButton';
import PropTypes from 'prop-types';

export const ResetButton = ({
	enableButton,
	onClickEvent
}) => {
	return (
		<ResetBtn
			type="button"
			onClick={onClickEvent}
			disabled={!enableButton}
		>
			Reset
		</ResetBtn>
	);
};

ResetButton.propTypes = {
	onClickEvent: PropTypes.func,
	enableButton: PropTypes.bool
};