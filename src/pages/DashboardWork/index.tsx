import "react-toastify/dist/ReactToastify.css";
import { Header, Main, ModalWork } from "./components";
import { useModal } from "../../contexts/ModalProvider";

const DashboardWork = () => {
  const { isModalWork } = useModal();

  return (
    <>
      {isModalWork && <ModalWork />}
      <Header />
      <Main />
    </>
  );
};

export { DashboardWork };
