import "../css/style.css";
import Seta from "../img/setinha.png";

export default function Questao({conteudoPergunta, setEstado}) {
    return (
        <div className="questao">
            <span>{conteudoPergunta}</span>
            <img
              onClick={() => setEstado("respondido")}
              src={Seta}
              alt="Turn Buttom"
            />
        </div>
    );
}