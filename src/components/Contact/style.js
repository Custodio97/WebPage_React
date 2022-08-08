import styled from "styled-components";


export const Section = styled.section`
width: 100%;
height: 100vh;
background-color: #1360ef;
display: flex;
align-items: center;
justify-content: space-around;
img{
    width: 40%;
}
@media (max-width:960px) {
    flex-direction: column-reverse;
    img{
        width: 80%;
    }
}
`

export const Form = styled.form`
max-width: 350px;
width: 100%;
height: 300px;
border-radius: 13px;
background-color: #2a6ce3;
h1{
    color: #fff;
    margin-bottom: 1.5rem;
}
`
export const InputBox = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
background-color: #ffffff;
border-radius: 9px;
> svg{
    font-size: 30px;
}
`
export const Input = styled.input`
width: 100%;
padding: 15px 8px;
border-radius: 10px;
background-color: #ffffff;
border: none;
outline: none;
`


export const Button = styled.button`
margin-top: 1rem;
width: 100%;
border-radius: 9px;
padding: 0.78rem 0.60rem;
border: 1px solid #ffffff;
cursor: pointer;
background-color: transparent;
&:hover{
    background-color: #ffffff;
    transition-duration: 0.8s;
}
`