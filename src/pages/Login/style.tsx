import { styled } from "styled-components";

const Container = styled.main`
  background-color: #181b24;
  color: white;

  #content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: #20202a;
      border-radius: 10px;
      padding: 15px;
      width: 22vw;
      height: 30vh;

      label {
        color: #d63e8d;
      }

      input {
        color: white;
      }

      button {
        width: 100%;
        margin-top: auto;
      }
    }
  }
`;

export { Container };
