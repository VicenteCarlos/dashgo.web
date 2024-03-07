import { StyledModalTech } from "./style";
import { useModal } from "../../../../contexts/ModalProvider";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./schema";
import { api } from "../../../../services/api";
import { IFormSubmitProps } from "./interfaces";
import { configToast } from "../../../Login/configToast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../../../contexts/UserProvider";

const ModalTech = () => {
  const { handleModalTech } = useModal();
  const { addTech } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleRequest = async (
    formData: IFormSubmitProps,
    token: string | null
  ) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (err) {
      console.log("erro: ", err);
      toast.error("Error", configToast);
    }
  };

  const formSubmit = (data: IFormSubmitProps) => {
    const token = localStorage.getItem("@USERTOKEN");

    handleRequest(data, token)
      .then((res) => {
        toast.success("Registrado", configToast);
        addTech(res);
        handleModalTech();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error", configToast);
      });
  };

  const statusTech = ["Iniciante", "Intermediário", "Avançando"];

  return (
    <StyledModalTech>
      <div id="container-modal">
        <button id="button-close" onClick={handleModalTech}>
          X
        </button>
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
            select
            label={errors.status ? errors.status.message : "Status"}
            variant="outlined"
            defaultValue="Status"
            color="primary"
            focused
            {...register("status")}
          >
            {statusTech.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </TextField>
          <Button id="button-tech" type="submit" variant="contained">
            Cadastrar
          </Button>
        </form>
      </div>
    </StyledModalTech>
  );
};

export { ModalTech };
