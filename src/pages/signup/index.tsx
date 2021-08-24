import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { Button, ThemeProvider, Typography,} from "@material-ui/core";
import * as Yup from "yup";
import Page from "../../components/Page/Page";
import formStyles from "../../styles/formStyles";
import theme from "../../styles/formTheme";

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
  confirmPassword: "",
};

const Signup = () => {
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
                  .required("Digite um e-mail válido")
                  .email("Formato inválido"),
                password: Yup.string()
                .required("Digite uma senha")
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  "A senha deve ter 8 caracteres, contendo letras maiúsculas e minúsculas, números e pelo menos um símbolo"
                )
                .length(8, "A senha deve ter exatamente 8 caracteres"),
          
                confirmPassword: Yup.string()
                  .required("Confirme sua senha")
                  .oneOf([Yup.ref("password")], "As senhas não coincidem")
              })}
              
            >
              {({ submitForm, isSubmitting }) => (
                <Form className={classes.form}>
                  <Typography
                    className={classes.title}
                    variant="h1">
                    Cadastre-se gratuitamente
                  </Typography>
                  <Field
                    required
                    className={classes.field}
                    component={TextField}
                    label="E-mail"
                    name="email"
                    type="email"
                    variant="outlined"
                    // InputProps={{
                    //   classes: ({ input: classes.input }),
                     
                    // }}
                    // InputLabelProps={{
                    //   classes: ({ root: classes.inputLabel }),
                    //   shrink: 'false'
                    // }}
                  />
                  <Field
                    required
                    className={classes.field}
                    component={TextField}
                    label="Senha"
                    name="password"
                    type="password"
                    variant="outlined"
                    // InputProps={{ classes: { input: classes.input } }}                    
                  />
                  <Field
                    className={classes.field}
                    component={TextField}
                    label="Confirme a senha"
                    name="confirmPassword"
                    type="password"
                    variant="outlined"
                    
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
                    Cadastrar
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

export default Signup;
