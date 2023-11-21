import { UserProvider } from "./UserProvider";
import { ModalProvider } from "./ModalProvider";
import { ReactNode } from "react";

interface IContextProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: IContextProviderProps) => (
  <UserProvider>
    <ModalProvider>
      {children}
    </ModalProvider>
  </UserProvider>
);

export { ContextProvider };
