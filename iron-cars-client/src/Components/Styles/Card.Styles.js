import styled from "styled-components";

const Card = styled.div`
    width: 95%;
    max-width: 400px;
    min-width: 400px;
    max-height: 650px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 3px 5px 5px 2px rgb(24 53 88 / 15%);
    position: relative;
    transition: 0.3s;

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
      color: #5c5f6b;
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

      color: #5c5f6b;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: lighter;
      margin-top: -3%;
    }

    .buy-now {
      padding-right: 25px;
      text-align: right;
      margin-top: -13%;
      font-size: 15px;
      color: #5c5f6b;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: lighter;
    }

    .link {
      position: absolute;
      text-align: center, bottom;
      text-decoration: none;
      box-shadow: 2px 2px 2px 2px rgb(24 53 88 / 10%);
      border-radius: 15px;
      /* potential fix? */
      padding: 20px 112px;
      margin-left: 27px;
      margin-right: 25px;
      margin-top: 6px;
      background: linear-gradient(90deg, black, #00adff);
      color: white;
      font-size: 25px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: bold;
    }

    .sold-out {
      background-color: #730006;
      color: white;
      font-size: 1.5em;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      width: 150px;
      padding: 10px;
      margin-left: 200px;
      text-align: center;
    }

    .link:hover {
      background: linear-gradient(45deg, #121212, black);
    }

    &:hover {
    background-color: #f8f8f8;
    box-shadow: 3px 5px 5px 2px rgb(24 53 88 / 30%);
  }
`

const BiddingCard = styled.div`
    margin-top: 30px;
    width: 95%;
    max-width: 800px;
    min-width: 800px;
    height: 800px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 3px 5px 5px 2px rgb(24 53 88 / 15%);
    position: relative;
    transition: 0.3s;

    img {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      width: 100%;
      height: 500px;
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
      margin-top: -3%;
      font-size: 18px;
      color: #5c5f6b;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: lighter;
    }

    h2 {
      padding-left: 25px;
      font-size: 35px;
    }

    h4.desc {
      padding-left: 25px;
      padding-right: 25px;
      min-height: 54px;
      color: #5c5f6b;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: lighter;
      font-size: 18px;
    }

    .buy-now {
      margin-left: 400px;
      margin-top: -13%;
      cursor: pointer;
      border-radius: 18px;
      padding: 30px 40px;
      background: linear-gradient(90deg, black, #00B098);
      width: 300px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 25px;
      font-weight: bold;
      color: white;
    }

    .link {
      position: absolute;
      text-align: center, bottom;
      text-decoration: none;
      box-shadow: 2px 2px 2px 2px rgb(24 53 88 / 10%);
      border-radius: 15px;
      /* potential fix? */
      padding: 20px 112px;
      margin-left: 27px;
      margin-right: 25px;
      margin-top: 6px;
      background: linear-gradient(90deg, black, #00B098);
      color: white;
      font-size: 25px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: bold;
    }

    .sold-out {
      background-color: #730006;
      color: white;
      font-size: 1.5em;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      width: 150px;
      padding: 10px;
      margin-left: 200px;
      text-align: center;
    }

    .buy-now:hover {
      background: linear-gradient(45deg, #121212, black);
    }

    &:hover {
    background-color: #f8f8f8;
    box-shadow: 3px 5px 5px 2px rgb(24 53 88 / 30%);
  }

`

export { Card, BiddingCard }