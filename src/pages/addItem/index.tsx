import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
// import * as Yup from "yup";
import Page from "../../components/Page/Page";
// import formStyles from "../../styles/formStyles";
// import theme from "../../styles/formTheme";
import "./styles.css";

const initialValues = {};

const AddItem = () => {
  // const classes = formStyles();
  
  return (
    <>
      <Page>
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
                    <h2>Categoria</h2>
                    <Field
                      name="categoria"
                      component={Select}
                      multiple
                      variant="outlined" 
                  />
                    </div>
                    <div>
                    <h2>Subcategoria</h2>
                    <Field
                      name="subcategoria"
                      component={Select}
                      multiple
                      variant="outlined" 
                  />
                  </div>
                  </div>
                  <div>
                    <h2>Cores</h2>
                    <Field
                      component={TextField}
                      name="cores"
                      type="text"
                      variant="outlined"
                  />
                  </div>
                  <div>
                    <h2>Tamanho</h2>
                    <Field
                      component={TextField}
                      name="tamanho"
                      type="text"
                      variant="outlined"
                  />
                  </div>
                  <div>
                    <h2>Marca</h2>
                    <Field
                      component={TextField}
                      name="marca"
                      type="text"
                      variant="outlined"
                  />
                  </div>
                  <div>
                    <h2>Tecido/Material</h2>
                    <Field
                      component={TextField}
                      name="material"
                      type="text"
                      variant="outlined"
                  />
                  </div>
                  <div>
                    <h2>Cuidados</h2>
                    <Field
                      name="cuidados"
                      component={Select}
                      multiple
                      variant="outlined" 
                  />
                  </div>
                  <div>
                    <h2>Ocasiões</h2>
                    <Field
                      component={TextField}
                      name="ocasiões"
                      type="text"
                      variant="outlined"
                    />
                  </div>
                  <div>
                    <h2>Estações</h2>
                    <Field
                      name="estações"
                      component={Select}
                      multiple
                      variant="outlined" 
                  />
                  </div>
                  <div>
                    <h2>Status</h2>
                    <Field
                      name="status"
                      component={Select}
                      multiple
                      variant="outlined" 
                  />
                  </div>
                  <div>
                    <h2>Custo</h2>
                    <Field
                      component={TextField}
                      name="custo"
                      type="text"
                      variant="outlined"
                  />
                  </div>
                  <div>
                  <h2>Data da Compra</h2>
                    <Field
                      component={KeyboardDatePicker}
                      name="data"
                      format="dd/MM/yy"
                      disableFuture="true"
                      inputVariant="outlined"
                    />
                  </div>
                  <div>
                    <h2>Notas</h2>
                    <Field
                      component={TextField}
                      name="notas"
                      type="text"
                      multiline={true}
                      rows={3}
                      variant="outlined"
                    />
                  </div>
                  <div>
                    <h2>Tags</h2>
                    <Field
                      component={TextField}
                      name="tags"
                      type="text"
                      variant="outlined"
                      placeholder="Adicione tags"
                      helperText="Insira uma vírgula depois de cada tag"
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
      </Page>
    </>
  );
};

export default AddItem;
