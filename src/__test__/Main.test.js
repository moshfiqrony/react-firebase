import React from 'react'
import ReactDOM from 'react-dom'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from '../containers/Form';
import Table from '../containers/Table';


test('test submit button calll', ()=> {
    const myMock = jest.fn(x => x+1);
    myMock(10);
    console.log(myMock.mock)
    expect(myMock.mock.calls.length).toBe(1)
    const handleDelete = jest.fn();
    const {container, getByText} = render(<Table users={[]} handleDelete={handleDelete}/>)
    expect(getByText('Username')).toBeInTheDocument()
    expect(getByText('Email')).toBeInTheDocument()
    expect(getByText('Action')).toBeInTheDocument()
})

test('submit button press and submit function called one time', () => {
    const container = document.createElement('div');
    const handleSubmit = jest.fn();
    ReactDOM.render(<Form handleClick={handleSubmit}/>, container);

    const form = container.querySelector('form');
    const {username, email, submit} = form.elements;

    form.dispatchEvent(new window.Event("submit"))

    username.value = 'myname';
    email.value = 'myname@gmail.com'
    
    expect(handleSubmit).toHaveBeenCalledTimes(1)

})

test('table test', () => {
    const container = document.createElement('div')
    const handleDelete = jest.fn();
    ReactDOM.render(<Table users={[]} handelDelete={handleDelete}/>, container)
    const tableRows = container.querySelector('tr')
    expect(tableRows.textContent).toBe('UsernameEmailAction')
})