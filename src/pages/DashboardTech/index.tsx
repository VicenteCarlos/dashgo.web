import "react-toastify/dist/ReactToastify.css";
import { Header, Main, ModalTech } from "./components";
import { useModal } from "../../contexts/ModalProvider";

const DashboardTech = () => {
  const { isModalTech } = useModal();

  return (
    <>
      {isModalTech && <ModalTech />}
      <Header />
      <Main />
    </>
  );
};

export { DashboardTech };
