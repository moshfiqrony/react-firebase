import React, { useState, useEffect } from 'react';
import fire from './Firebase';
import { Input, Button, Icon } from 'antd'

function App(props) {
	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const [users, setUsers] = useState([]);
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
	}, []);

	const handleClick = () => {
		let data = db.collection('users').add({
			username: username,
			email: email
		})
		loadData()
	}
	const handleDelete = (id) => {
		let data = db.collection('users').doc(id).delete()
		loadData()
	}


	return (
		<div className='container'>
			<div>
				
				<div className="row pt-5 justify-content-center d-flex">
					<div className="col-4 pb-4">
						<Input
							name='username'
							value={username}
							placeholder='Enter your username'
							onChange={(event) => setUsername(event.target.value)}
						/>
					</div>
					<div className="col-4">
						<Input
							name='username'
							value={email}
							placeholder='Enter your email'
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>
					<div className="col-4">
						<Button 
							type='primary'
							onClick={handleClick}
						>Add</Button>
					</div>
				</div>
			</div>
			<div className="row">
					<table className='table table-bordered'>
						<thead>
							<tr>
								<th>Username</th>
								<th>Email</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{users.map(user => {
								return (<tr key={user.id}>
									<td>{user.data().username}</td>
									<td>{user.data().email}</td>
									<td><Button type='danger' onClick={() => handleDelete(user.id)}>Remove</Button></td>
								</tr>)
							})}
						</tbody>
					</table>

				</div>
		</div>
	);
}

export default App;