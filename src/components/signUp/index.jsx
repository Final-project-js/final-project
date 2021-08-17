import React, { useState } from 'react'
import './signUp.less'
// from antd
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import {add_user} from '../../store/toLog/action'





export const SignUp = () => {
    // hooks
    const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userName, setUserName] = useState('')

	const state = useSelector((state) => state.toLog)
	const currentUser = useSelector((state) => state.toLog.currentUser)
	const dispatch = useDispatch()

    const history = useHistory()
    // functionality 
    useEffect(() => {
		localStorage.setItem('users', JSON.stringify(state))
	}, [currentUser])

	useEffect(() => {
		if (userEmail.trim() && userName.trim() && userPassword.trim()) {
			localStorage.setItem('users', JSON.stringify(state))
			history.push('/')
		}
	}, [state])

	const checkAccount = () => {
		let gmail = /([a-zA-Z0-9\.]{5,15})\@gmail[\.]com/g

		if (gmail.test(userEmail) && userPassword.length >= 8) {
			return dispatch(
				add_user({
					firstName: userName.split(' ')[0],
					lastName: userName.split(' ')[1],
					userEmail,
					userPassword,
					photo: 'https://www.pngkey.com/png/full/178-1787134_png-file-svg-github-icon-png.png',
					id: Date.now().toString(),
				}),
			)
		} else {
			console.log('is error signUp.jsx 54')
		}
	}

    return (
        <div className='sign-up'>
            <div className='sign-container'>
                <h2 className='sign-01'>Sign up</h2>
                <h5 className='sign-02'>Your Name</h5>
                <Input 
                className='sign-03' 
                placeholder="Type your name"
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
                 />
                <h5 className='sign-04'>Email</h5>
                <Input 
                className='sign-05' 
                placeholder="Type your email"
                prefix={<UserOutlined />} 
                value={userEmail}
				onChange={(e) => setUserEmail(e.target.value)}
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
                    value={userPassword}
					onChange={(e) => setUserPassword(e.target.value)}
                />
                <Button 
                className='sign-08'
                type='primary'
                onClick={() => {
                    checkAccount()
                }}
                >Create account</Button>
                <h3 className='sign-09'>Already have account? <a href="/login">log in</a></h3>
            </div>
        </div>
    )
}
