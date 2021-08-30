import * as Yup from "yup";

const itemValidation = Yup.object().shape({
  categoria: Yup.string().required("Selecione a categoria"),
  ocasioes: Yup.array(),
  estacoes: Yup.array(),
  tamanho: Yup.string(),
  marca: Yup.string(),
  material: Yup.string(),
  notas: Yup.string(),
  tags: Yup.string(),
});
  
export default itemValidation;