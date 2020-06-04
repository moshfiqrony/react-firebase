import { Spin, Icon } from 'antd';
import React, { useEffect, useState } from 'react';
import InsertForm from './containers/Form';
import Table from './containers/Table';
import fire from './Firebase';

function App(props) {
	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const [users, setUsers] = useState(null);
	const db = fire.firestore();

	const loadData = async () => {
		let data = await db.collection('users').get()

		let Mydata = []

		data.docs.map(doc => {
			Mydata.push(doc)
		})
		setUsers(Mydata)
	}

	useEffect(() => {
		loadData()
	});

	const handleClick = (e) => {
		e.preventDefault();
		db.collection('users').add({
			username: username,
			email: email
		})
		.then(result => {
			setUsername('');
			setEmail('');
		})
		loadData()
	}
	const handleDelete = (id) => {
		db.collection('users').doc(id).delete()
		loadData()
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
			{users ? <Table
				users={users}
				handleDelete={handleDelete}
			/> : <Spin indicator={<Icon type='loading'/>} size='large'/>}
		</div>
	);
}

export default App;