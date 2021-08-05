import { Link } from "react-router-dom";
import ExternalPage from "../../components/ExternalPage/ExternalPage";

const Home = () => {
  return (
    <ExternalPage>
      <Link to="/cadastro">
        <button>Cadastre-se</button>
      </Link>
    </ExternalPage>
  );
};

export default Home;
