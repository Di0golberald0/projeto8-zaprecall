import {useState} from "react";
import "../css/style.css";
import Flashcard from "./Flashcard";
import Questao from "./Questao";
import Resultado from "./Resultado";
import CardResolvido from "./CardResolvido";

export default function Pergunta({
    indexPergunta,
    conteudoPergunta,
    respostaPergunta,
    concluidas,
    setConcluidas,
    icons,
    setIcons,
    setErro
  }) {
    
    const [estado, setEstado] = useState("unclicked");
  
    return (
      <div className="pergunta">
        {estado === "unclicked" ? (
          <Flashcard indexPergunta={indexPergunta} setEstado={setEstado} />
        ) : estado === "aberto" ? (
          <Questao conteudoPergunta={conteudoPergunta} setEstado={setEstado} />
        ) : estado === "respondido" ? (
          <Resultado
            respostaPergunta={respostaPergunta}
            concluidas={concluidas}
            setConcluidas={setConcluidas}
            icons={icons}
            setIcons={setIcons}
            setErro={setErro}
            setEstado={setEstado}
          />
        ) : (
          <CardResolvido indexPergunta={indexPergunta} estado={estado} />
        )}
      </div>
    );
  }