import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  margin: 10px auto;

  .user-infos {
    display: flex;

    h5 {
      font-size: 16px;
      span {
        font-size: 14px;
      }
    }
  }

  p {
    margin-left: 8.5%;
  }

  #content-button {
    display: flex;
    margin-left: 4%;

    .trash {
      background: none;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    button {
      background-color: #8259d7;
      border: none;
      color: white;
      font-weight: bold;
      cursor: pointer;      
    }
  }
`;

export { Container };
