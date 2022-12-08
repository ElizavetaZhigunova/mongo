import React, { useState } from 'react';
import "../registration/registration.css";
import Inputs from "../inputs/inputs";
import { login } from '../actions/user';
import { useDispatch } from 'react-redux';



const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='registration'>
            <div className="registration__header">Авторизация</div>
            <Inputs value={email} setValue={setEmail} type="text" placeholder="Введите email"/>
            <Inputs value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
            <button type='button' className="registration__btn" onClick={() => dispatch(login(email, password))}>Войти</button>
        </div>
    );
};

export default Login;