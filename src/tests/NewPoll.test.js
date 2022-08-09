import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewPoll from '../components/NewPoll';
import middleware from '../middleware';
import reducer from '../reducers';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = legacy_createStore(reducer, middleware);

const component = render(
	<Provider store={store}>
		<Router>
			<NewPoll />
		</Router>
	</Provider>
);

const inputOne = component.getByTestId('option-one-input');
const inputTwo = component.getByTestId('option-two-input');
const submitBtn = component.getByTestId('option-submit');

describe('NewPoll', () => {
	it('will add a question to the array', async () => {
		fireEvent.change(inputOne, { target: { value: 'Create a React app' } });
		fireEvent.change(inputTwo, { target: { value: 'Create an Angular app' } });
		expect(component.getByTestId('success-header')).toBeInTheDocument();
		expect(component.queryByTestId('error-header')).not.toBeInTheDocument();
	});

	it('matches the snapshot when fields are not passed', () => {
		expect(component).toMatchSnapshot();
	});

	it('matches the snapshot when fields are passed', () => {
		fireEvent.change(inputOne, { target: { value: 'Create a React app' } });
		fireEvent.change(inputTwo, { target: { value: 'Create a Python app' } });
		expect(component).toMatchSnapshot();
	});
});
