import React from 'react';
import * as C from './styles';

const Button = ({text, onClick, Type="button"}) => {
    return ( 
        <C.Button type={Type} onClick={onClick}>
            {text}
        </C.Button>
    );
}

export default Button;
