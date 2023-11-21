import { useUser } from "../../../../../../contexts/UserProvider";
import { api } from "../../../../../../services/api";
import { Container } from "./style";
import { VscTrash } from "react-icons/vsc";

const Card = ({ item }: any) => {
  const { removeTech } = useUser();
  const [year, month, day] = item.created_at.split("-");

  const remTech = async () => {
    try {
      const token = localStorage.getItem("@USERTOKEN");

      return await api.delete(`/users/techs/${item.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = () => {
    remTech()
      .then((res) => removeTech(item))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div className="user-infos">
        <h5>
          {item.title}: <span>{item.status}</span>
        </h5>
      </div>
      <p>{`${day[0]}${day[1]}/${month}/${year}`}</p>
      <div id="content-button">
        <button onClick={handleRemove} className="trash">
          <VscTrash />
        </button>
      </div>
    </Container>
  );
};

export { Card };
