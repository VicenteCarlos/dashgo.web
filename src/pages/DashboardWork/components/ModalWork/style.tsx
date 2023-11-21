import styled from "styled-components";

const StyledModalWork = styled.div`
  position: absolute;
  z-index: 1;
  left: 35.5%;
  top: 20%;
  border-radius: 5px;
  padding: 7px;
  color: white;

  #container-modal {
    background-color: #1F2029;
    border-radius: 5px;
    width: 30vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    #button-close {
      margin: 20px 20px 0 auto;
      border-radius: 100%;
      width: 4.5%;
      background-color: #1F2029;
      color: white;
      border: none;
      font-weight: bold;
      font-size: 17px;
      padding: 5px;
      cursor: pointer;
    }

    #content-input {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 8.5%;

      input {
        margin: 10px 0;
        padding: 10px;
        color: white;
      }

      #button-tech {
        width: 100%;
        border-radius: 5px;
        margin-top: 40px;
      }
    }
  }
`;

export { StyledModalWork };
