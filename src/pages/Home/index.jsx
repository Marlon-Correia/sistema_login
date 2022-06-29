import React from 'react';
import Button from '../../components/button'
import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { signout, user } = useAuth();
    const userActual = user.name;
    const navigate = useNavigate();
    return ( 
        <C.Container>
            <C.Title>
                {userActual !== undefined ? `Olá ${userActual}` : ''}
            </C.Title>
            <Button text='Sair' onClick={() => [signout(), navigate('/')]} />
        </C.Container>
    );
}

export default Home;