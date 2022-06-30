import React, { useState } from 'react';
import Input from '../../components/input'
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FacebookLogo, GoogleLogo, Key, TwitterLogo } from 'phosphor-react';

const SignIn = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if(!email | !password){
            setError('Preencha todos os campos')
            return ;
        }
        const response = signin(email, password)
        if(response){
            setError(response)
            return ;
        };
        navigate('/home');
    };


    
    return ( 
        <C.Container>
            <C.LeftSide>
                <C.Label>Enter your Account</C.Label>
                <Input
                    width='60%'
                    type='email'
                    placeholder='Digite seu E-mail'
                    value={email}
                    onChange={e => [setEmail(e.target.value), setError('')]}
                />
                <Input
                    width='60%'
                    type='password'
                    placeholder='Digite sua senha'
                    value={password}
                    onChange={e => [setPassword(e.target.value), setError('')]}
                />
                <C.LabelError>{error}</C.LabelError>
                <C.Button type='button' onClick={handleLogin}>Entrar</C.Button>
                <C.LabelSignUp>
                    Não tem uma conta ?
                    <C.Strong>
                        <Link to='/signup'>
                            &nbsp;Registre-se
                        </Link>
                    </C.Strong>
                </C.LabelSignUp>
                <C.AreaIcons>
                    <FacebookLogo style={{margin: '10px 10px', cursor: 'pointer'}} size={40} color="#154c7c" weight="light" />
                    <GoogleLogo style={{margin: '10px 10px', cursor: 'pointer'}} size={40} color="#fe5e54" weight="light" />
                    <TwitterLogo style={{margin: '10px 10px', cursor: 'pointer'}} size={40} color="#6dc4f7" weight="light" />
                </C.AreaIcons>
            </C.LeftSide>
            <C.RightSide>
            </C.RightSide>
        </C.Container>
    );
}

export default SignIn;