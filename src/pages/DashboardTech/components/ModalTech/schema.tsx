import * as yup from "yup";

const formSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Campo obrigatório"),
});

export { formSchema };
