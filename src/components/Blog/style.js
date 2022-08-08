import styled from "styled-components";

export const Section = styled.section`
margin-top: 1rem;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #205fe3;

`
export const Content = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`

export const Slide = styled.div`
max-width: 800px;
width: 100%;
display: flex;

height: 400px;

@media (max-width:960px) {
    width: 90%;
}

`
export const SlideWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
`

export const SliderCard = styled.div`
&.carosuel_card {
display: flex;
flex-direction: column;
align-items: center;
flex: 1;
position: absolute;
width: 100%;
height: 300px;
overflow: hidden;
border-radius: 20px;
box-shadow: 0px 0px 11px 3px rgba(0,0,0,0.15);
opacity: 0;
pointer-events: none;
transform: scale(0.8);
transition: 0.5s ease-in-out;
img{
    width: 80%;
}
h2{
    position: absolute;
}
}
&.carosuel_card.active{
    opacity: 1;
    transform: scale(1);
    pointer-events:visible;
}
`
export const Slide_Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
color: #f84f14;
display: flex;
padding: 40px 30px;
align-items: flex-end;

h2{
    font-size: 1rem;
    margin-bottom: 1rem;
}
p{
    margin-top:10px;
    font-size: 15px;
    color: #f84f14;
    font-weight: bold;
}
`
