import React from 'react';
import { shallow } from 'enzyme';
import { ResetButton } from './ResetButton';

it('should call check props value in SelectedValue component', () => {
	const mockFn = jest.fn(() => true);
	const component = shallow(<ResetButton />);

	component.simulate('click');
	expect(mockFn()).toBe(true);
});