import "./styles/css";
import Green from "./img/Green.png";
import Orange from "./img/Orange.png";
import Red from "./img/Red.png";

export default function CardResolvido({indexPergunta, estado}) {
    return (
      <div className="flashcard">
        <span
          className={
            estado === "red"
              ? "redLetters"
              : estado === "green"
              ? "greenLetters"
              : "orangeLetters"
          }
        >
          Pergunta {indexPergunta}
        </span>
        <img
          src={estado === "red" ? Red : estado === "green" ? Green : Orange}
          alt="Response Buttom"
        />
      </div>
    );
  }