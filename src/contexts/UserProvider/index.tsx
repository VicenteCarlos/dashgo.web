import { useState, createContext, useContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { api } from "../../services/api";

interface IUserContextProps {
  data: any;
  isLoading: boolean;
  tech: any;
  addTech: (newTech: any) => void;
  addWork: (work: any) => void;
  removeTech: (newTech: any) => void;
  removeWork: (newTech: any) => void;
  work: any;
  isFetching: boolean;
}

interface IUserProviderProps {
  children: ReactNode;
}

const UserContext = createContext({} as IUserContextProps);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [tech, setTech] = useState<any>([]);
  const [work, setWork] = useState<any>([]);

  const addTech = (newTech: any) => setTech([...tech, newTech]);
  const addWork = (newWork: any) => setWork([...work, newWork]);
  
  const removeTech = (newTech: any) =>
    setTech(tech.filter((item: any) => item.id !== newTech.id));
  const removeWork = (newWork: any) =>
    setWork(work.filter((item: any) => item.id !== newWork.id));

  const token = localStorage.getItem("@USERTOKEN");

  const { data, isLoading, isFetching } = useQuery("user", async () => {
    const { data } = await api.get(`/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTech(data.techs);
    setWork(data.works);

    return data;
  });

  return (
    <UserContext.Provider
      value={{
        data,
        isLoading,
        tech,
        addTech,
        work,
        addWork,
        removeTech,
        removeWork,
        isFetching,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
