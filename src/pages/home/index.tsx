import { Link } from "react-router-dom";
import ExternalPage from "../../components/ExternalPage/ExternalPage";

const Home = () => {
  return (
    <div>
      <ExternalPage />
      <Link to="/cadastro">
        <button>Cadastre-se</button>
      </Link>
    </div>
  );
};

export default Home;
