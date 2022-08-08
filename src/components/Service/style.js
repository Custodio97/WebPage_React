import styled from "styled-components";


export const Section = styled.div`
width: 100%;
height: 100vh;
display:flex;
align-items: center;
justify-content: center;
color: #1360ef;


`

export const Container = styled.div`
max-width: 1420px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
> img{
    width: 40%;
}
@media (max-width:960px) {
    flex-direction: column-reverse;
    img{
        width: 60%;
        margin-bottom: 1rem;
    }
}
`

export const Content = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h2{
    color: #000;
    font-size: 2rem;

}
p{
    font-size: 1.1rem;
}
`
export const DivProfile = styled.div`
display: flex;
align-items: center;
h3{
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    span{
     color:gray;
    }
}
img{
    width: 75px;
    height: 75px;
    border-radius: 50%;
}
`

