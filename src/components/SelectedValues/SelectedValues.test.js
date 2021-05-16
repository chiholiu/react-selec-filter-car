import React from 'react';
import { shallow } from 'enzyme';
import { SelectedValues } from './SelectedValues';

it('should call check props value in SelectedValue component', () => {
	const vehicleProps = ['car'];
	const brandProps = ['tesla'];
	const colorProps = ['red'];
	const component = shallow(<SelectedValues curSelectVehicle={vehicleProps} curSelectBrand={brandProps} curSelectColor={colorProps} />);

	// Finds every node in the render tree that returns true for the provided predicate function.
	const vehicle = component.findWhere(
		n => n.prop("data-testid") === "select-vehicle" // find data-testid attribute and then its value
	);

	const brand = component.findWhere(
		n => n.prop("data-testid") === "select-brand"
	);

	const color = component.findWhere(
		n => n.prop("data-testid") === "select-color"
	);

	expect(vehicle.text()).toBe(vehicleProps[0]);
	expect(brand.text()).toBe(brandProps[0]);
	expect(color.text()).toBe(colorProps[0]);
});