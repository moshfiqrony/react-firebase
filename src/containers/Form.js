import { Button, Input } from 'antd';
import React from 'react';

function Form(props) {
    return (
        <form
            onSubmit={props.handleClick}
        >
            <div className="row justify-content-center d-flex align-items-center">
                <div className="col-4">
                    <div className="row pt-5 justify-content-center d-flex">
                        <div className="col-12 pb-4">
                            <Input
                                name='username'
                                required
                                value={props.username}
                                placeholder='Enter your username'
                                onChange={(event) => props.setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-12 pb-4">
                            <Input
                                name='username'
                                required
                                type='email'
                                value={props.email}
                                placeholder='Enter your email'
                                onChange={(event) => props.setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-12 pb-4">
                            <Button
                                style={{ width: '100%' }}
                                type='primary'
                                htmlType='submit'
                                name='submit'
                            >Add</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;