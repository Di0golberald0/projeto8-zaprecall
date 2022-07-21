import React from "react";
import "./style.css";
import Vector from "./img/Vector.png";
import Green from "./img/Green.png";
import Orange from "./img/Orange.png";
import Red from "./img/Red.png";
import Seta from "./img/setinha.png";

function Pergunta({
  indexPergunta,
  conteudoPergunta,
  respostaPergunta,
  concluidas,
  setConcluidas,
  icons,
  setIcons,
  erro,
  setErro
}) {
  const [estado, setEstado] = React.useState("unclicked");

  function Concluido(color) {
    setEstado(color);
    if (color === "red") {
      setErro(true);
      setIcons([...icons, "Red"]);
    }
    if (color === "green") {
      setIcons([...icons, "Green"]);
    }
    if (color === "orange") {
      setIcons([...icons, "Orange"]);
    }
  }

  function Flashcard() {
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

  function Question() {
    return (
      <div className="question">
        <span>{conteudoPergunta}</span>
        <img
          onClick={() => setEstado("respondido")}
          src={Seta}
          alt="Turn Buttom"
        />
      </div>
    );
  }

  function Result() {
    return (
      <div className="result">
        <span>{respostaPergunta}</span>
        <div className="options">
          <button
            className="red"
            onClick={() => {
              setConcluidas(concluidas + 1);
              Concluido("red");
            }}
          >
            Não lembrei
          </button>
          <button
            className="orange"
            onClick={() => {
              setConcluidas(concluidas + 1);
              Concluido("orange");
            }}
          >
            Quase não lembrei
          </button>
          <button
            className="green"
            onClick={() => {
              setConcluidas(concluidas + 1);
              Concluido("green");
            }}
          >
            Zap!
          </button>
        </div>
      </div>
    );
  }

  function SolvedCard() {
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

  return (
    <div className="pergunta">
      {estado === "unclicked" ? (
        <Flashcard indexPergunta={indexPergunta} setEstado={setEstado} />
      ) : estado === "aberto" ? (
        <Question conteudoPergunta={conteudoPergunta} setEstado={setEstado} />
      ) : estado === "respondido" ? (
        <Result
          respostaPergunta={respostaPergunta}
          concluidas={concluidas}
          setConcluidas={setConcluidas}
          icons={icons}
          setIcons={setIcons}
          erro={erro}
          setErro={setErro}
        />
      ) : (
        <SolvedCard indexPergunta={indexPergunta} estado={estado} />
      )}
    </div>
  );
}

const perguntas = [
  {
    conteudoPergunta: "O que é JSX?",
    respostaPergunta: "Uma extensão de linguagem do JavaScript"
  },
  {
    conteudoPergunta: "O React é __",
    respostaPergunta: "uma biblioteca JavaScript para construção de interfaces"
  },
  {
    conteudoPergunta: "Componentes devem iniciar com __",
    respostaPergunta: "letra maiúscula"
  },
  {
    conteudoPergunta: "Podemos colocar __ dentro do JSX",
    respostaPergunta: "expressões"
  },
  {
    conteudoPergunta: "O ReactDOM nos ajuda __",
    respostaPergunta:
      "interagindo com a DOM para colocar componentes React na mesma"
  },
  {
    conteudoPergunta: "Usamos o npm para __",
    respostaPergunta: "gerenciar os pacotes necessários e suas dependências"
  },
  {
    conteudoPergunta: "Usamos props para __",
    respostaPergunta: "passar diferentes informações para componentes"
  },
  {
    conteudoPergunta: "Usamos estado (state) para __",
    respostaPergunta:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
  }
];

perguntas.sort(comparador);

function comparador() {
  return Math.random() - 0.5;
}

export default function Perguntas(props) {
  return (
    <div className="perguntas">
      {perguntas.map((perguntas, index) => (
        <Pergunta
          indexPergunta={index + 1}
          conteudoPergunta={perguntas.conteudoPergunta}
          respostaPergunta={perguntas.respostaPergunta}
          concluidas={props.concluidas}
          setConcluidas={props.setConcluidas}
          icons={props.icons}
          setIcons={props.setIcons}
          erro={props.erro}
          setErro={props.setErro}
        />
      ))}
    </div>
  );
}
