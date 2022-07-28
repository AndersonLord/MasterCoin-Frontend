import { observer } from "mobx-react-lite";
import Cabecalho from "./componentes/cabecalho";
import Dashboard from "./componentes/dashboard";
import Rodape from "./componentes/rodape";

const Home = observer(function HomeFunctinMobx() {
  return (
    <div className="teste">
      <Cabecalho />
      <Dashboard />
      <Rodape />
    </div>
  );
});
export default Home;
