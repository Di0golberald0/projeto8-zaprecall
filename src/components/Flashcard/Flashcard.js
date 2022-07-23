import "./style.css";
import Vector from "./img/Vector.png";

export default function Flashcard({indexPergunta, setEstado}) {
    return (
        <div className="flashcard">
            <span>Pergunta {indexPergunta}</span>
            <img
              onClick={() => setEstado("aberto")}
              src={Vector}
              alt="Play Buttom"
            />
        </div>
    );
}