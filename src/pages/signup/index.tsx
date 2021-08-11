import ExternalPage from "../../components/ExternalPage/ExternalPage";

const Signup = () => {
  return (
    <ExternalPage>
          <h1>Crie uma Conta</h1> 
        <form action="">
        <div>
        <label htmlFor="nome">Nome</label>
          <input 
          type="nome" 
          id="nome" 
          name="nome">
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
);
};


export default Signup;
