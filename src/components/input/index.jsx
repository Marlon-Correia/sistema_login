import React, { useState } from 'react';
import * as C from './styles';

const Input = ({type, placeholder, value, onChange, width}) => {
    const [border, setBorder] = useState('1px solid #A5297D');
    return (
        <C.Input
            onMouseOver={() => setBorder('1px solid #60BAEF')}
            onMouseOut={() => setBorder('1px solid #A5297D')}
            border={border}
            width={width}
            value={value}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
};

export default Input;
