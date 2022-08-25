import styled from "styled-components";

const BidInput = styled.div`
  input {
    width: 380px;
    height: 35px;
    margin: 5px;
  }

  input::placeholder {
    font-size: 15px;
    padding-left: 10px;
  }

  input[type=submit] {
    cursor: pointer;
    margin-left: 203px;
    margin-top: 15px;
  }
`

export { BidInput }