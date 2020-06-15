import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'
import "babel-polyfill"
import {
    createHistory,
    createMemorySource,
    LocationProvider,
} from '@reach/router'


function renderWithRouter(
    ui,
    { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
    return {
        ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
        history,
    }
}


test('routing test', async () => {
    const {
        container,
        getByRole,
        history: { navigate },
    } = renderWithRouter(<App />, {route: '/view'})

    await navigate('/view')
    
    expect(getByRole('heading')).toBe('View')

})