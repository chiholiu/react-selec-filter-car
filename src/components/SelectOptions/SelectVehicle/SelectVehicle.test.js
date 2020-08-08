import React from 'react';
import { shallow } from 'enzyme';
import { SelectVehicle } from './SelectVehicle';

it('should call onChange prop and pass data in SelectVehicle component', () => {
	const onSearchMock = jest.fn();
	const data = [ 'car' ]; // square bracket needed, because this is an array with a map function 
	const event = 'select-vehicle';
	const component = shallow(<SelectVehicle onChangeEvent={onSearchMock} uniqueTypes={data}/>);
    
	component.simulate('change', event); // simulated onChange event 
	expect(onSearchMock).toBeCalledWith('select-vehicle');
});