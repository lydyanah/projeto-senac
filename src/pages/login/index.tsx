import { Link } from "react-router-dom";
import Page from "../../components/Page/Page";

const Login = () => {
  return (
    <>
      <Page>
        <h1>Faça seu Login</h1> 
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
        <Link to="/closet" className="button"> Entrar</Link>
        </div>

      </Page>
    </>

    );
};

export default Login;
