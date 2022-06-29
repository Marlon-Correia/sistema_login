import React, { useState } from 'react';
import Input from '../../components/input'
import Button from '../../components/button'
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConf, setEmailConf] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
        if(!email | !password | !emailConf | !name){
            setError('Preencha todos os campos!')
            return ;
        } else if(email !== emailConf){
            setError('Os e-mails são diferentes!')
            return;
        }
        const response = signup(email, password, name);
        if(response){
            setError(response);
            return ;
        }
        alert('Usuário cadastrado!')
        navigate('/');
    }
    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
            <Input
                    width='100%'
                    type='text'
                    placeholder='Digite o nome do usuário'
                    value={name}
                    onChange={e => [setName(e.target.value), setError('')]}
                />
                <Input
                    width='100%'
                    type='email'
                    placeholder='Digite seu E-mail'
                    value={email}
                    onChange={e => [setEmail(e.target.value), setError('')]}
                />
                <Input
                    width='100%'
                    type='email'
                    placeholder='Confirme seu E-mail.'
                    value={emailConf}
                    onChange={e => [setEmailConf(e.target.value), setError('')]}
                />
                <Input
                    width='100%'
                    type='password'
                    placeholder='Digite sua senha'
                    value={password}
                    onChange={e => [setPassword(e.target.value), setError('')]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button text='Increver-se' onClick={handleSignUp}  />
                <C.LabelSignUp>
                    Já tem uma conta ?
                    <C.Strong>
                        <Link to='/signin'>
                            &nbsp;Entre
                        </Link>
                    </C.Strong>
                </C.LabelSignUp>
            </C.Content>
        </C.Container>
    );
}

export default SignUp;