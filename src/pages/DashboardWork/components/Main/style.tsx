import { styled } from "styled-components";

const Container = styled.main`
  color: white;
  opacity: ${({ isModalWork }) => (isModalWork ? "20%" : "100%")};
  z-index: ${({ isModalWork }) => (isModalWork ? "absolute" : "initial")};

  #content {
    display: flex;

    #menu,
    #data {
      display: flex;
      flex-direction: column;
      margin-top: 3%;
    }

    #menu {
      margin-left: 10.2%;

      h5 {
        color: #666c81;
        font-size: 20px;
      }

      button {
        font-size: 18px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        background: none;
        border: none;
        color: white;
        cursor: pointer;

        svg {
          margin-right: 10px;
        }
      }
    }

    #data {
      border-radius: 10px;
      background-color: #1f2029;
      width: 73.2%;
      padding: 10px;
      margin-left: 5%;

      .title-create {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 2%;

        h2 {
          font-size: 30px;
        }

        button {
          color: white;
          background-color: #d24088;
          border-radius: 10px;
          border: none;
          padding: 10px;
          font-weight: bold;
          cursor: pointer;
        }
      }

      .content-data {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 1px solid #292a33;
        width: 95%;
        margin: 1.5% auto;

        p {
          color: #3d3e4b;
        }

        .tech-p {
          margin: 0 35% 15px 9.5%;
        }
      }
    }
  }
`;

export { Container };
