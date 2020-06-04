import React, { Fragment } from 'react';
import { Router, Link } from '@reach/router'
import App from '../App';
import TabularView from '../containers/TabularView'
import InsertForm from '../containers/InsertForm'

function index(props) {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/view'>Table</Link>
                    </li>
                    <li>
                        <Link to='/form'>Form</Link>
                    </li>

                </ul>
            </nav>
            <Router>
                <App path='/' />
                <TabularView path='/view'/>
                <InsertForm path='/form'/>
            </Router>
        </Fragment>
    );
}

export default index;