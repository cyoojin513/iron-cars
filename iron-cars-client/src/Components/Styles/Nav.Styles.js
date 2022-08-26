import styled from "styled-components";

const NavigationStyles = styled.div`
    background-color: white;

    a {
        text-decoration: none;
        padding-top: 30px;
        text-align: center;
        font-size: 23px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: gray;
    }

    .active {
        color: black;
    }

    .about{
        text-align: right;
        padding-right: 200px;
    }

    /* img {
        width: 250px;
        height: auto;
        padding-left: 30px;
        padding-top: 10px;
    } */

`


const Logo = styled.div`
    /* display: flex;
    align-items: center; */

    img {
        width: 250px;
        height: auto;
        margin-top: -20px;
    }

`

export {NavigationStyles, Logo}