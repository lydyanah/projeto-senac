import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";
import { Button, MenuItem, ThemeProvider } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
import api from "../../services/api";
import itemValidation from "./itemValidation";
import MemberPage from "../../components/memberPage/memberPage";
import theme from "../../styles/formTheme";
import "./styles.css";

const initialValues = {
  categoria: "",
  subcategoria: "",
  ocasioes: [""],
  estacoes: [""],
  status: "",
  tamanho: "",
  marca: "",
  material: "",
  custo: "",
  dataCompra: "",
  notas: "",
  tags: "",
};

const AddItem = () => {
  return (
    <>
      <MemberPage>
        <ThemeProvider theme={theme}>
          <section className="adicionarItem">
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
              <Formik
                initialValues={initialValues}
                onSubmit={ async (values, { setSubmitting }) => {
                  try {
                    const response = await api.post("/itens", {
                      categoria: values.categoria,
                      subcategoria: values.subcategoria,
                      tamanho: values.tamanho,
                      marca: values.marca,
                      material: values.material,
                      preco: values.custo,
                      dataCompra: values.dataCompra,
                      status: values.status,
                      estacaoLook: values.estacoes,
                      ocasioesLook: values.ocasioes,
                      notasItem: values.notas,
                      tagsItem: values.tags,
                      cor: "",
                      cuidados: "",
                    })
                    if (response.status === 201) {
                      alert("Cadastro realizado com sucesso")
                      console.log("Cadastrado com sucesso")
                    }
                    else { console.log("Ocorreu uma falha")}
                    setSubmitting(false);
                  } catch (error) {
                    console.log(`Ocorreu uma falha ${error}`)
                  }
                }}
                validationSchema={itemValidation}
              >
                {({ submitForm, isSubmitting }) => (
                  <Form className="cadastroItem">
                    <h1>Adicionar Item</h1>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<PhotoCamera />}
                    >
                      Carregar imagem
                      <input
                        accept="image/jpeg, image/png"
                        type="file"
                        hidden
                      />
                    </Button>

                    <label htmlFor="categoria">Categoria</label>
                    <Field
                      className="teste"
                      name="categoria"
                      component={Select}
                      variant="outlined"
                      inputProps={{ id: "categoria" }}
                    >
                      <MenuItem disabled value="">
                        <em>Selecione</em>
                      </MenuItem>
                      <MenuItem value="Roupas">Roupas</MenuItem>
                      <MenuItem value="Sapatos">Sapatos</MenuItem>
                      <MenuItem value="Acessórios">Acessórios</MenuItem>
                    </Field>

                    <label htmlFor="subcategoria">Subcategoria</label>
                    <Field
                      name="subcategoria"
                      component={Select}
                      variant="outlined"
                      inputProps={{ id: "subcategoria" }}
                    >
                      <MenuItem value="">
                        <em>Selecione</em>
                      </MenuItem>
                      <MenuItem value="Piscina">Esporte</MenuItem>
                      <MenuItem value="Pijamas">Pijamas</MenuItem>
                      <MenuItem value="Agasalhos">Agasalhos</MenuItem>
                    </Field>                    
                   
                    <label htmlFor="tamanho">Tamanho</label>
                    <Field
                      component={TextField}
                      name="tamanho"
                      type="text"
                      variant="outlined"
                      inputProps={{ id: "tamanho" }}
                    />

                    <label htmlFor="marca">Marca</label>
                    <Field
                      component={TextField}
                      name="marca"
                      type="text"
                      variant="outlined"
                      inputProps={{ id: "marca" }}
                    />

                    <label htmlFor="material">Tecido/Material</label>
                    <Field
                      component={TextField}
                      name="material"
                      type="text"
                      variant="outlined"
                      inputProps={{ id: "material" }}
                    />

                    <label htmlFor="ocasioes">Ocasiões</label>
                    <Field
                      component={Select}
                      name="ocasioes"
                      type="text"
                      multiple
                      variant="outlined"
                      inputProps={{ id: "ocasioes" }}
                    >
                      <MenuItem value="Casual">Casual</MenuItem>
                      <MenuItem value="Trabalho">Trabalho</MenuItem>
                      <MenuItem value="Social">Social</MenuItem>
                      <MenuItem value="Esporte">Esporte</MenuItem>
                      <MenuItem value="Festa">Festa</MenuItem>
                    </Field>

                    <label htmlFor="estacoes">Estações</label>
                    <Field
                      name="estacoes"
                      component={Select}
                      multiple={true}
                      variant="outlined"
                      inputProps={{ id: "estacoes" }}
                    >
                      <MenuItem value="Primavera">Primavera</MenuItem>
                      <MenuItem value="Verão">Verão</MenuItem>
                      <MenuItem value="Outono">Outono</MenuItem>
                      <MenuItem value="Inverno">Inverno</MenuItem>
                    </Field>

                    <label htmlFor="status">Status</label>
                    <Field
                      name="status"
                      component={Select}
                      variant="outlined"
                      inputProps={{ id: "status" }}
                    >
                      <MenuItem value="">
                        <em>Selecione</em>
                      </MenuItem>
                      <MenuItem value="Disponível">Disponível</MenuItem>
                      <MenuItem value="Em uso">Em uso</MenuItem>
                      <MenuItem value="Para lavar">Para lavar</MenuItem>
                      <MenuItem value="Para passar">Para passar</MenuItem>
                      <MenuItem value="Conserto">Conserto</MenuItem>
                      <MenuItem value="Emprestada(o)">Emprestada(o)</MenuItem>
                      <MenuItem value="Doação">Doação</MenuItem>
                      <MenuItem value="Descarte">Descarte</MenuItem>
                    </Field>

                    <label htmlFor="custo">Custo</label>
                    <Field
                      component={TextField}
                      name="custo"
                      type="text"
                      variant="outlined"
                      inputProps={{ id: "custo" }}
                    />

                    <label htmlFor="dataCompra">Data da Compra</label>
                    <Field
                      component={KeyboardDatePicker}
                      name="dataCompra"
                      format="dd/MM/yy"
                      disableFuture="true"
                      inputVariant="outlined"
                      cancelLabel="CANCELAR"
                      invalidDateMessage=""
                      inputProps={{ id: "dataCompra" }}
                      fontSize="small"
                    />

                    <label htmlFor="notas">Notas</label>
                    <Field
                      component={TextField}
                      name="notas"
                      type="text"
                      multiline={true}
                      rows={3}
                      variant="outlined"
                      inputProps={{ id: "notas" }}
                    />

                    <label htmlFor="tags">Tags</label>
                    <Field
                      component={TextField}
                      name="tags"
                      type="text"
                      variant="outlined"
                      placeholder="Adicione tags"
                      helperText="Insira uma vírgula depois de cada tag"
                      inputProps={{ id: "tags" }}
                    />

                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      disableElevation
                      onClick={submitForm}
                      variant="contained"
                    >
                      Adicionar
                    </Button>
                    {isSubmitting}
                  </Form>
                )}
              </Formik>
            </MuiPickersUtilsProvider>
          </section>
        </ThemeProvider>
      </MemberPage>
    </>
  );
};

export default AddItem;
