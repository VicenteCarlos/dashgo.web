import * as yup from "yup";

const formSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  deploy_url: yup.string().required("Campo obrigatório"),
});

export { formSchema };
