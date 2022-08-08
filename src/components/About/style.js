import styled from "styled-components";

export const Section = styled.section`
width: 100%;
height: 100vh;
background-color: #060927;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #fff;
`


export const Content = styled.div`
width: 100%;
display: grid;
align-items: center;
justify-items: center;
grid-template-columns:repeat(3,1fr);
@media (max-width:960px) {
    grid-template-columns: repeat(1,1fr);
}
`


export const Box = styled.div`
margin-top: 1rem;
width: 290px;
height: 130px;
background-color: #060a2a;
border-radius: 16px;
display: flex;
align-items: center;
flex-direction: column;
color: #7482a7;
> div{
    display: flex;
    img{
      margin-right: 1rem;
      
    }
    p{
        font-size: 1.2rem;
        
    }
}
@media (max-width:960px) {
    width: 170px;
    height: 100px;
    img{
        width: 30px;
    }
    h3{
        font-size: 1rem;
    }
    p{
        font-size: 12px;
    }
}
`