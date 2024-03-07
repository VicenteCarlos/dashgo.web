import { useState, createContext, useContext, ReactNode } from "react";

interface IModalProviderProps {
  children: ReactNode;
}

interface IModalContextProps {
  isModalTech: boolean;
  isModalWork: boolean;
  handleModalTech: () => void;
  handleModalWork: () => void;
}

const ModalContext = createContext({} as IModalContextProps);

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isModalTech, setIsModalTech] = useState<boolean>(false);
  const [isModalWork, setIsModalWork] = useState<boolean>(false);

  const handleModalTech = () => setIsModalTech(!isModalTech);
  const handleModalWork = () => setIsModalWork(!isModalWork);

  return (
    <ModalContext.Provider
      value={{
        isModalTech,
        isModalWork,
        handleModalTech,
        handleModalWork,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
