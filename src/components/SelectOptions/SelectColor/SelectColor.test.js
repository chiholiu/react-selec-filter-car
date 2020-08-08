import React from 'react';
import { shallow } from 'enzyme';
import { SelectColor } from './SelectColor';

it('should call onChange prop and pass data in SelectColor component', () => {
	const onSearchMock = jest.fn();
	const data = [ 'red' ]; // square bracket needed, because this is an array with a map function 
	const event = 'select-color'; 
	const component = shallow(<SelectColor onChangeEvent={onSearchMock} uniqueColors={data}/>);

	component.simulate('change', event); // simulated onChange event
	expect(onSearchMock).toBeCalledWith('select-color');
});