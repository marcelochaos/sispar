import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import styles from "./Reembolsos.module.scss";

function Reembolsos() {
  return (
    <div>
      <header>
        <img src={Home} alt="Casinha da header" />
        <img src={Seta} alt="Setinha da header" />
        <p>Reembolsos</p>
      </header>
      <main>
        <h1>Sistema de Reembolsos</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórivo.
        </p>

        <section>
            
        </section>
      </main>
    </div>
  );
}
export default Reembolsos;
