import styled from "styled-components";

const SellGrid = styled.div`
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 100px;
  justify-content: center;

  input {
    width: 400px;
    height: 35px;
    margin: 5px;
  }

  input::placeholder {
    font-size: 15px;
    padding-left: 10px;
  }

  input[type=submit] {
    cursor: pointer;
    margin-left: 218px;
    margin-top: 30px;
  }

`

export { SellGrid }