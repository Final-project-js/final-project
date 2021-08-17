import React , { useState }  from 'react'
import './Login.less'
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

// hooks

import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

// action
import { login_user } from '../../store/toLog/action';


export const Login = () => {
    // hooks 
    const [inEmail, setInEmail] = useState('')
	const [inPassword, setInPassword] = useState('')

	const state = useSelector((state) => state.toLog)
	const currentUser = useSelector((state) => state.toLog.currentUser)
	const dispatch = useDispatch()

    return (
            <div className='sign-up'>
                <div className='sign-container'>
                    <h2 className='sign-01'>Login in</h2>
                    
                    <h5 className='sign-04'>Email</h5>
                    <Input 
                    className='sign-05' 
                    placeholder="Type your email"
                    prefix={<UserOutlined />} 
                    value={inEmail}
					onChange={(e) => setInEmail(e.target.value)}
                    />
                    <h5 className='sign-06'>Password</h5>
                    <Input.Password
                        className='sign-07'
                        placeholder="Type your password"
                        iconRender={visible => 
                            (visible 
                                ? <EyeTwoTone /> 
                                : <EyeInvisibleOutlined />
                                )}
                        value={inPassword}
                        onChange={(e) => setInPassword(e.target.value)}
                    />
                    <Button 
                    className='sign-08'
                    type='primary'
                    onClick={() => {
                        dispatch(login_user({ inEmail, inPassword }))
                    }}
                    >Login in</Button>
                    <h3 className='sign-09'>Don't have an account? <a href="/signUp">Sign up</a></h3>
                </div>
            </div>
    )
}
