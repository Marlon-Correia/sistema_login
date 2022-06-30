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
    @media (max-width: 425px){
        width: 55%;
        margin-top: 25%;
    }
`;
export const RightSide = styled.div`
    background-image: url(${Back});
    width: 58%;
    height: 100vh;
`;
export const Button = styled.button`
    margin-top: 20px;
    padding: 16px 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    background: rgb(165,41,125);
    background: linear-gradient(90deg, rgba(165,41,125,1) 50%, rgba(254,95,84,1) 100%);
    color: white;
    font-weight: 600;
    font-size: 16px;
    max-width: 350px;
    @media (max-width: 768px){
        width: 80%;
    }
    @media (max-width: 375px){
        width: 60%;
    }
`;

export const Label = styled.label`
    font-size: 36px;
    font-weight: 600;
    color: #000;
    margin-bottom: 30px;
    @media (max-width: 768px){
        font-size: 28px;
        margin-bottom: 20px;
    }
    @media (max-width: 425px){
        font-size: 20px;
        margin-bottom: 16px;
    }
    @media (max-width: 375px){
        font-size: 16px;
        margin-bottom: 16px;
    }
`;

export const LabelSignUp = styled.label`
    margin-top: 15px;
    font-size: 16px;
    color: #000;
    @media (max-width: 425px){
        font-size: 12px;
    }
    @media (max-width: 375px){
        font-size: 10px;
    }
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
    margin-top: 10px;
`;