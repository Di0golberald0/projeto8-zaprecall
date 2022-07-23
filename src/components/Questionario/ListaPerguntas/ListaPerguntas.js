import "./style.css";
import Pergunta from "./Pergunta/Pergunta";

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

export default function Perguntas({ concluidas, setConcluidas, icons, setIcons, setErro}) {
  return (
    <div className="perguntas">
      {perguntas.map((perguntas, index) => (
        <Pergunta
          key={index}
          indexPergunta={index + 1}
          conteudoPergunta={perguntas.conteudoPergunta}
          respostaPergunta={perguntas.respostaPergunta}
          concluidas={concluidas}
          setConcluidas={setConcluidas}
          icons={icons}
          setIcons={setIcons}
          setErro={setErro}
        />
      ))}
    </div>
  );
}
