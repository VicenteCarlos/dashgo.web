import "react-toastify/dist/ReactToastify.css";
import { Header, Main, ModalWork } from "./components";
import { useModal } from "../../contexts/ModalProvider";

export interface IPropsWork {
  isModalWork: boolean
}

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
