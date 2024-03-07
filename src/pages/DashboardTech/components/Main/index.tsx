import { useNavigate } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalProvider";
import { useUser } from "../../../../contexts/UserProvider";
import { Card } from "./components/Card";
import { Container } from "./style";
import { VscRocket, VscBook } from "react-icons/vsc";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const Main = () => {
  const { tech } = useUser();
  const { isModalTech, handleModalTech } = useModal();
  const navigate = useNavigate();

  return (
    <Container isModalTech={isModalTech}>
      <ToastContainer />
      <div id="content">
        <div id="menu">
          <h5>Geral</h5>
          <button onClick={() => navigate("/dashboard/tech")} className="content-menu">
            <VscRocket />
            <span>Techs</span>
          </button>
          <button onClick={() => navigate("/dashboard/work")} className="content-menu">
            <VscBook />
            <span>Works</span>
          </button>
        </div>
        <div id="data">
          <div className="title-create">
            <h2>Techs</h2>
            <button onClick={handleModalTech}>+ Criar Novo</button>
          </div>
          <div className="content-data">
            <p className="tech-p">TECNOLOGIA</p>
            <p className="created-p">CRIADO EM</p>
          </div>
          {tech.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export { Main };
