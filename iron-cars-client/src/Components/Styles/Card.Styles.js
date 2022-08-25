import styled from "styled-components";

const Card = styled.div`
    width: 95%;
    max-width: 400px;
    min-width: 400px;
    max-height: 650px;
    background-color: #FFFF;
    border-radius: 20px;
    box-shadow: 3px 5px 5px 2px rgb(24 53 88 / 15%);
    position: relative;

    img {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      width: 100%;
      height: 320px;
      object-fit: cover;
      margin: 0;
    }

    h1 {
      padding-left: 25px;
      font-size: 31px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: bold;
    }

    h5 {
      padding-left: 25px;
      margin-top: -5%;
      font-size: 15px;
      color: #757989;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: lighter;
    }

    h2 {
      padding-left: 25px;
      font-size: 28px;
    }

    h4.desc {
      padding-left: 25px;
      padding-right: 25px;
      min-height: 54px;

      color: #757989;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: lighter;
      margin-top: -3%;
    }

    .buy-now {
      padding-right: 25px;
      text-align: right;
      margin-top: -13%;
      font-size: 15px;
      color: #757989;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: lighter;
    }

    .link {
      position: absolute;
      text-align: center, bottom;
      text-decoration: none;
      box-shadow: 2px 2px 2px 2px rgb(24 53 88 / 10%);
      border-radius: 15px;
      padding: 20px 112px;
      margin-left: 25px;
      margin-right: 25px;
      margin-top: 6px;
      background: linear-gradient(90deg, #0037ff, #00adff);
      color: white;
      font-size: 30px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: bold;
    }

    .link:hover {
      background: linear-gradient(45deg, #002E90, #053CB0);
    }

`

export {Card}