import { Spin, Icon } from 'antd';
import React, { useEffect, useState } from 'react';
import Table from '../containers/Table';
import fire from '../Firebase';

function App(props) {
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
    
	const handleDelete = (id) => {
		db.collection('users').doc(id).delete()
		loadData()
	}


	return (
		<div className='container'>
            {
            users ? <Table
				users={users}
				handleDelete={handleDelete}
			/> :
            <Spin indicator={<Icon type='loading'/>} size='large'/>
            }
		</div>
	);
}

export default App;