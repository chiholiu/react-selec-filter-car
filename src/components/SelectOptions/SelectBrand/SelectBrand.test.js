import React from 'react';
import { shallow } from 'enzyme';
import { SelectBrand } from './SelectBrand';

it('should call onChange prop and pass data in SelectBrand component', () => {
	const onSearchMock = jest.fn();
	const data = ['tesla']; // square bracket needed, because this is an array with a map function 
	const event = 'select-brand';
	const component = shallow(<SelectBrand onChangeEvent={onSearchMock} filteredData={data} />);

	component.simulate('change', event); // simulated onChange event
	expect(onSearchMock).toBeCalledWith('select-brand');
});