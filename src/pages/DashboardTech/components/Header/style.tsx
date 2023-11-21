import { styled } from "styled-components";

const Container = styled.header`
  color: white;
  opacity: ${({ isModalTech }) => (isModalTech ? "20%" : "100%")};

  #content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1,
    .profile-header {
      margin: 2% 10%;
    }

    h1 {
      span {
        color: #ba467a;
        font-size: 40px;
      }
    }

    .profile-header {
      display: flex;
      justify-content: center;
      align-items: center;

      .profile-icons {
        display: flex;
        margin-right: 10px;

        button {
          background: none;
          border: none;
          svg {
            font-size: 20px;
            margin: 0 17px;
            cursor: pointer;
            color: white;
          }
        }
      }

      #line {
        padding: 1px;
        height: 30px;
        background-color: #292c35;
        border-radius: 5px;
      }

      .profile-user {
        display: flex;

        .data-user {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin: 0 10%;

          h4 {
            margin-left: auto;
          }

          p {
            color: #6f737b;
          }
        }

        img {
          border-radius: 100%;
        }
      }
    }
  }
`;

export { Container };
