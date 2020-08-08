import React from 'react';
import App from './App';
import { mount } from 'enzyme';

test('App not crashing', () => {
	const app = mount(<App/>);
	expect(app).toHaveLength(1);
});