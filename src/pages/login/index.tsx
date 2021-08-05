import ExternalPage from "../../components/ExternalPage/ExternalPage";

const Login = () => {
  return (
    <>
      <ExternalPage>
        <h1>Create Account</h1> {/*Essa é a página de Login...*/}
        <form action="">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name">
            </input>
          </div>
        </form>

        <div>
        <label htmlFor="email">E-mail</label>
          <input 
          type="email" 
          id="email" 
          name="email">
          </input>  
        </div>
        
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
