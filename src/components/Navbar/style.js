import styled from "styled-components";


export const Header = styled.header`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: space-around;
.toggle{
    display: none;
    cursor: pointer;
    font-size: 1.3rem;
    position: relative;
    color: #000;
    @media (max-width:960px) {
        display: block;
    }
}
> .logo{
    a{
        font-size: 2rem;
        color: #000;
        text-decoration: none;
        span{
            color: #1360ef;
        }
    }
}
`

export const Nav = styled.nav`
max-width:1000px;
height: 100%;
display: flex;
align-items: center;

.nav-menu{
    display: flex;
    
    list-style-type: none;
    li{
     padding: 0 10px;
     

    a{
        text-decoration: none;
         color: #1360ef;
        font-weight: bold;
        font-size: 1.1rem;
    }
   }
   @media (max-width:960px) {
      width: 50%;
      height: 100vh;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
     
   }
    
}
@media (max-width:960px) {
    .nav-menu.active{
        opacity: 1;
       
        color: red;
        li{
            padding: 15px;
        }
    }
}

`