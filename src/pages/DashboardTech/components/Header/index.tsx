import { useModal } from "../../../../contexts/ModalProvider";
import { useUser } from "../../../../contexts/UserProvider";
import { Container } from "./style";
import { FiBell } from "react-icons/fi";
import { BiDoorOpen } from "react-icons/bi";
import { useNavigate } from "react-router-dom"
import { QueryCache } from "react-query"

const Header = () => {
  const { data } = useUser();
  const { isModalTech } = useModal();
  const navigate = useNavigate()

  const queryCache = new QueryCache()

  const handleExit = () => {
    queryCache.clear()
    localStorage.clear()
    navigate("/")
  }

  return (
    <Container isModalTech={isModalTech}>
      <div id="content">
        <h1>
          dashgo<span>.</span>
        </h1>
        <div className="profile-header">
          <div className="profile-icons">
            <button>
              <FiBell />
            </button>
            <button onClick={handleExit}>
              <BiDoorOpen />
            </button>
          </div>
          <span id="line"></span>
          <div className="profile-user">
            <div className="data-user">
              <h4>{data.name}</h4>
              <p>{data.email}</p>
            </div>
            <img src="https://picsum.photos/60/60" alt="user" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Header };
