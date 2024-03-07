import { TextField, Button } from "@mui/material";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./schema";
import { api } from "../../services/api";
import { ILoginProps } from "./interfaces";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { configToast } from "./configToast";
import { useUser } from "../../contexts/UserProvider";

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const isLogged = async (data: ILoginProps) =>
    await api.post("/sessions", data);

  const sendData = (data: ILoginProps) => {
    isLogged(data)
      .then((res) => {
        localStorage.setItem("@USERTOKEN", res.data.token);
        toast.success("Logado!", configToast);
        navigate("/dashboard/tech");
      })
      .catch((err) => toast.error("Usuário ou Senha Inválidos", configToast));
  };

  return (
    <Container>
      <ToastContainer />
      <div id="content">
        <form onSubmit={handleSubmit(sendData)}>
          <TextField
            sx={{ margin: "10px 0" }}
            label="Email"
            variant="filled"
            fullWidth
            {...register("email")}
          />
          <TextField
            sx={{ margin: "10px 0" }}
            label="Senha"
            variant="filled"
            type="password"
            fullWidth
            {...register("password")}
          />
          <Button type="submit" sx={{ margin: "10px 0" }} variant="contained">
            Entrar
          </Button>
        </form>
      </div>
    </Container>
  );
};
export { Login };
