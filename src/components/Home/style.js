import styled from "styled-components";



export const Section = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
img{
    width: 50%;
}
@media (max-width:960px) {
    flex-direction: column;
}
`

export const Container = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h1{
    font-size: 2.8rem;
    color: #1360ef;
}
p{
    font-size: 1.1rem;
    color:#93bfdf;
    font-weight: normal;
}
`


export const GrupoButtons = styled.div`
margin: 0.85rem 0;
display: flex;
align-items: center;
justify-content: center;

> .btn1{
    background-color:#205fe3;
    border: none;
    border-radius: 10px;
    padding: 1rem 1rem;
    margin-right: 1rem;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #f84f14;
        transition-duration: 0.8s;
        
    }

}
> .btn2{
     background-color:transparent;
    border: 1px solid #205fe3;
    border-radius: 10px;
    padding: 1rem 1rem;
    color: #205fe3;
    cursor: pointer;
    &:hover{
        background-color: #f84f14;
        border: none;
        color: white;
        transition-duration: 0.8s;
        
    }
    
}

`