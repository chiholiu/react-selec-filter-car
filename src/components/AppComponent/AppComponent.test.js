import React from 'react';
import { AppComponent } from './AppComponent';
import { mount } from 'enzyme';

test('AppComponent running', () => {
	const appComponent = mount(<AppComponent/>);
    
	expect(appComponent).toHaveLength(1);
});