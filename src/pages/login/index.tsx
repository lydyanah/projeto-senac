import { Field, Form, Formik } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";
import { Button, ThemeProvider, Typography } from "@material-ui/core";
import * as Yup from "yup";
import Page from "../../components/Page/Page";
import formStyles from "../../styles/formStyles";
import theme from "../../styles/formTheme";

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const Login = () => {
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
                email: Yup.string()
                  .required("Campo obrigatório")
                  .email("Formato inválido"),
                password: Yup.string().required("Campo obrigatório"),
              })}
            >
              {({ submitForm, isSubmitting }) => (
                <Form className={classes.form}>
                  <Typography variant="h2">Entrar</Typography>
                  <Field
                    className={classes.field}
                    component={TextField}
                    label="E-mail"
                    name="email"
                    type="email"
                    variant="outlined"
                  />
                  <Field
                    className={classes.field}
                    component={TextField}
                    label="Senha"
                    name="password"
                    type="password"
                    variant="outlined"
                  />
                  <Field
                    component={CheckboxWithLabel}
                    Label={{ label: "Lembre-se de mim" }}
                    name="rememberMe"
                    type="checkbox"
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
                    Entrar
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

export default Login;
