import React from 'react';
import {Button} from 'antd';
function Table(props) {
    return (
        <div>
			<h1>View</h1>
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
						{props.users.map(user => {
							return (<tr key={user.id}>
								<td>{user.data().username}</td>
								<td>{user.data().email}</td>
								<td><Button type='danger' onClick={() => props.handleDelete(user.id)}>Remove</Button></td>
							</tr>)
						})}
					</tbody>
				</table>

			</div>
        </div>
    );
}

export default Table;