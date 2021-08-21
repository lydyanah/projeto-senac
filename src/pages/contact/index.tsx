import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { Button, ThemeProvider, Typography } from "@material-ui/core";
import * as Yup from "yup";
import Page from "../../components/Page/Page";
import formStyles from "../../styles/formStyles";
import theme from "../../styles/formTheme";
import './styles.css'

const initialValues = {
  nome: "",
  email: "",
  mensagem: "",
};

const Contact = () => {
  const classes = formStyles();

  return (
    <>
      <Page>
        <section className={classes.root}>
          <ThemeProvider theme={theme}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                nome: Yup.string().required("Campo obrigatório"),
                email: Yup.string()
                  .required("Campo obrigatório")
                  .email("Formato inválido"),
                mensagem: Yup.string().required("Campo obrigatório"),
              })}
            >
              {({ submitForm, isSubmitting }) => (
                <Form className={classes.form}>
                  <Typography
                    className={classes.title}
                    variant="h1">
                    Envie suas dúvidas e sugestões pra gente!
                  </Typography>
                  <Field
                    required
                    className= {classes.field}
                    component={TextField}
                    label="Nome"
                    name="nome"
                    type="text"
                    variant="outlined"
                  />
                  <Field
                    required
                    className={classes.field}
                    component={TextField}
                    label="E-mail"
                    name="email"
                    type="email"
                    variant="outlined"
                  />
                  <Field
                    required
                    className={classes.field}
                    component={TextField}
                    label="Mensagem"
                    name="mensagem"
                    type="text"
                    multiline= {true}
                    rows={4}
                    variant="filled"
                  />               
                  <Button
                    classes={{
                      root: classes.submitButton,
                      label: classes.label,
                    }}
                    color="primary"
                    disabled={isSubmitting}
                    disableElevation
                    onClick={submitForm}
                    variant="contained"
                  >
                    Enviar
                  </Button>
                  {isSubmitting}
                </Form>
              )}
            </Formik>
          </ThemeProvider>
        </section>
      </Page>
    </>
  );
};


export default Contact;
