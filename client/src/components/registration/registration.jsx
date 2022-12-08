import React, { useState } from 'react';
import "../registration/registration.css";
import Inputs from "../inputs/inputs";
import {registration} from '../actions/user';

const Registration = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Inputs value={email} setValue={setEmail} type="text" placeholder="Введите email"/>
            <Inputs value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
            <button className="registration__btn" onClick={() => registration(email,password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;