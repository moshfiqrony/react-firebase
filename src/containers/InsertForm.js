import React, { useState } from 'react';
import InsertForm from './Form';
import fire from '../Firebase';
import {useNavigate} from '@reach/router'

function App(props) {
    const navigate = useNavigate();
	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const db = fire.firestore();

	const handleClick = (e) => {
		e.preventDefault();
		db.collection('users').add({
			username: username,
			email: email
		})
		.then(result => {
            navigate('/view')
		})
	}


	return (
		<div className='container'>
			<InsertForm
				handleClick={handleClick}
				setEmail={setEmail}
				setUsername={setUsername}
				email={email}
				username={username}
			/>
		</div>
	);
}

export default App;