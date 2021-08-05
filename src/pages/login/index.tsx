import ExternalPage from "../../components/ExternalPage/ExternalPage";

const Login = () => {
  return (
    <>
      <ExternalPage>
        <h1>Faça seu Login</h1> {/*Essa é a página de Login...*/}
        <form action="">
        <div>
        <label htmlFor="email">E-mail</label>
          <input 
          type="email" 
          id="email" 
          name="email">
          </input>  
        </div>
        </form>
        <div>
        <label htmlFor="password">Senha</label>
          <input 
          type="password" 
          id="password" 
          name="password">
          </input>  
        </div>
      </ExternalPage>
    </>

    );
};

export default Login;
