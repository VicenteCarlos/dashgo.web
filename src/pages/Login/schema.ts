import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
  password: yup.string().required("Campo Obrigatório"),
});

export { formSchema };
