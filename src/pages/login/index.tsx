import { Field, Form, Formik } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";
import { Button} from "@material-ui/core";
import * as Yup from "yup";
import Page from "../../components/Page/Page";
import formStyles from "../../styles/formStyles";

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
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required("Campo obrigatório"),
            password: Yup.string().required("Campo obrigatório"),
          })}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className={classes.form}>
              <h1>Entrar</h1>
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
                className={classes.field}
                component={CheckboxWithLabel}
                Label={{ label: "Lembre-se de mim" }}
                name="rememberMe"
                type="checkbox"
              />
                <Button
                className={classes.submitButton}
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
          </section>
      </Page>
    </>
  );
};

export default Login;
