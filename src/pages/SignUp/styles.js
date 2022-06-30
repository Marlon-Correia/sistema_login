import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 10px;
    height: 100vh;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #fff;
    max-width: 350px;
    padding: 20px;
    border-radius: 5px;
`;
export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #000;
`;
export const LabelSignUp = styled.label`
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
        color: #676767;
    }
`;
export const Button = styled.button`
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
    @media (max-width: 375px){
        width: 100%;
    }
`;