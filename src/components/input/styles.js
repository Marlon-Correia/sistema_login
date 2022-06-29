import styled from 'styled-components'

export const Input = styled.input`
    outline: none;
    padding: 16px 20px;
    width: ${props => props.width};
    font-size: 16px;
    background-color: #f0f2f5;
    border: none;
    transition: all ease 0.4s;
    border-bottom: ${props => props.border};
    margin: 6px 0;
`;
