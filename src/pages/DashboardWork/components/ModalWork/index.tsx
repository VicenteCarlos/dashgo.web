import { StyledModalWork } from "./style";
import { useModal } from "../../../../contexts/ModalProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./schema";
import { api } from "../../../../services/api";
import { useUser } from "../../../../contexts/UserProvider";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { configToast } from "../../../Login/configToast";

const ModalWork = () => {
  const { handleModalWork } = useModal();
  const { addWork } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleRequest = async (formData: any, token: string | null) => {
    try {
      const { data } = await api.post("/users/works", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (err) {
      console.log("erro: ", err);
    }
  };

  const formSubmit = (data: any) => {
    const token = localStorage.getItem("@USERTOKEN");

    handleRequest(data, token)
      .then((res) => {
        toast.success("Registrado", configToast);
        addWork(res);
        handleModalWork();
      })
      .catch((err) => {
        console.log(err)
        toast.error("Error", configToast)
      });
  };

  return (
    <StyledModalWork>
      <div id="container-modal">
        <button id="button-close" onClick={handleModalWork}>X</button>
        <form onSubmit={handleSubmit(formSubmit)} id="content-input">
          <TextField
            sx={{ width: "150%", marginBottom: "20px" }}
            label={errors.title ? errors.title.message : "Título"}
            variant="outlined"
            color="primary"
            focused
            {...register("title")}
          />
          <TextField
            sx={{ width: "150%" }}
            label={
              errors.description ? errors.description.message : "Descrição"
            }
            variant="outlined"
            color="primary"
            focused
            {...register("description")}
          />
          <TextField
            sx={{ width: "150%", margin: "19px 0" }}
            label={errors.deploy_url ? errors.deploy_url.message : "Deploy"}
            variant="outlined"
            color="primary"
            focused
            {...register("deploy_url")}
          />

          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </form>
      </div>
    </StyledModalWork>
  );
};

export { ModalWork };
