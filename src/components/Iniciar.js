import "../css/style.css";
import logo from "../img/logo.png";

export default function Iniciar({setPage}) {
  return (
    <div className="iniciar">
      <img src={logo} alt="Logo" />
      <h1 className="titulo">ZapRecall</h1>
      <button
        className="botaoIniciar"
        onClick={() => setPage("questonario")}
      >
        Iniciar Recall!
      </button>
    </div>
  );
}
