import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";
import { Button, FormControl, MenuItem } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
// import * as Yup from "yup";
import MemberPage from "../../components/memberPage/memberPage";
// import formStyles from "../../styles/formStyles";
// import theme from "../../styles/formTheme";
import "./styles.css";

const initialValues = {
  categoria: [""],
  subcategoria: [""],
  ocasioes: [""],
  estacoes: [""],
  status: ["selecione"],
};

const AddItem = () => {
  // const classes = formStyles();

  return (
    <>
      <title>Adicionar item</title>
      <MemberPage>
        {/* <section className={classes.root}>
          <ThemeProvider theme={theme}> */}

        <section className="adicionarItem">
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}
              // validationSchema={}
            >
              {({ submitForm, isSubmitting }) => (
                <Form className="cadastroItemForm">
                  <h1>Adicionar Item</h1>
                  <div>
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
                    <div>
                      <FormControl>
                        <label htmlFor="categoria">Categoria</label>
                        <Field
                          name="categoria"
                          component={Select}
                          variant="outlined"
                          inputProps={{ id: "categoria" }}
                        >
                          <MenuItem disabled value="">
                            <em>Selecione</em>
                          </MenuItem>
                          <MenuItem value="roupas">Roupas</MenuItem>
                          <MenuItem value="sapatos">Sapatos</MenuItem>
                          <MenuItem value="acessorios">Acessórios</MenuItem>
                        </Field>
                      </FormControl>
                    </div>
                    <div>
                      <FormControl>
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
                        </Field>
                      </FormControl>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cores">Cores</label>
                    <Field
                      component={TextField}
                      name="cores"
                      type="color"
                      variant="outlined"
                      inputProps={{ id: "cores" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="tamanho">Tamanho</label>
                    <Field
                      component={TextField}
                      name="tamanho"
                      type="text"
                      variant="outlined"
                      inputProps={{ id: "tamanho" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="marca">Marca</label>
                    <Field
                      component={TextField}
                      name="marca"
                      type="text"
                      variant="outlined"
                      inputProps={{ id: "marca" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="material">Tecido/Material</label>
                    <Field
                      component={TextField}
                      name="material"
                      type="text"
                      variant="outlined"
                      inputProps={{ id: "material" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="cuidados">Cuidados</label>
                    <Field
                      name="cuidados"
                      component={Select}
                      multiple
                      variant="outlined"
                      inputProps={{ id: "cuidados" }}
                    />
                  </div>
                  <div>
                    <FormControl>
                      <label htmlFor="ocasioes">Ocasiões</label>
                      <Field
                        component={Select}
                        name="ocasioes"
                        type="text"
                        multiple
                        variant="outlined"
                        inputProps={{ id: "ocasioes" }}
                      >
                        <MenuItem value="casual">Casual</MenuItem>
                        <MenuItem value="trabalho">Trabalho</MenuItem>
                        <MenuItem value="social">Social</MenuItem>
                        <MenuItem value="esporte">Esporte</MenuItem>
                        <MenuItem value="festa">Festa</MenuItem>
                      </Field>
                    </FormControl>
                  </div>
                  <FormControl>
                    <label htmlFor="estacoes">Estações</label>
                    <Field
                      name="estacoes"
                      component={Select}
                      multiple={true}
                      variant="outlined"
                      inputProps={{ id: "estacoes" }}
                    >
                      <MenuItem value="primavera">Primavera</MenuItem>
                      <MenuItem value="verão">Verão</MenuItem>
                      <MenuItem value="outono">Outono</MenuItem>
                      <MenuItem value="inverno">Inverno</MenuItem>
                    </Field>
                  </FormControl>
                  <div>
                    <FormControl>
                      <label htmlFor="status">Status</label>
                      <Field
                        name="status"
                        component={Select}
                        variant="outlined"
                        inputProps={{ id: "status" }}
                      >
                        <MenuItem value="selecione">
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
                    </FormControl>
                  </div>
                  <div>
                    <label htmlFor="custo">Custo</label>
                    <Field
                      component={TextField}
                      name="custo"
                      type="text"
                      variant="outlined"
                      inputProps={{ id: "custo" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="dataCompra">Data da Compra</label>
                    <Field
                      component={KeyboardDatePicker}
                      name="dataCompra"
                      format="dd/MM/yy"
                      disableFuture="true"
                      inputVariant="outlined"
                      cancelLabel="CANCELAR"
                      inputProps={{ id: "dataCompra" }}
                    />
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                </Form>
              )}
            </Formik>
          </MuiPickersUtilsProvider>
        </section>
        {/* </ThemeProvider>
        </section> */}
      </MemberPage>
    </>
  );
};

export default AddItem;
