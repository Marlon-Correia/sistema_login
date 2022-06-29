import styled from 'styled-components'
import Back from '../../images/back.png'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;
export const LeftSide = styled.div`
    width: 42%;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 10%;
`;
export const RightSide = styled.div`
    background-image: url(${Back});
    width: 58%;
    height: 100vh;
`;

export const Label = styled.label`
    font-size: 36px;
    font-weight: 600;
    color: #000;
    margin-bottom: 30px;
`;
export const LabelSignUp = styled.label`
    margin-top: 15px;
    font-size: 16px;
    color: #000;
`;

export const LabelError = styled.label`
    font-size: 16px;
    color: #f00;
`;
export const Strong = styled.strong`
    cursor: pointer;
    a {
        text-decoration: none;
        color: #000;
    }
`;
export const AreaIcons = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
`;