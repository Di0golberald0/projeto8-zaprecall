import { useState } from "react";
import ListaPerguntas from "./ListaPerguntas/ListaPerguntas";
import Footer from "./Footer/Footer";
import "./style.css";
import logoPequeno from "./img/logo-pequeno.png";

export default function Questionario() {
  const [concluidas, setConcluidas] = useState(0);
  const total = 8;
  const [icons, setIcons] = useState([]);
  const [erro, setErro] = useState(false);
  return (
    <div className="questionario">
      <span className="top">
        <img src={logoPequeno} alt="Logo Pequeno" />
        <h1 className="titulo">ZapRecall</h1>
      </span>
      <ListaPerguntas
        concluidas={concluidas}
        setConcluidas={setConcluidas}
        icons={icons}
        setIcons={setIcons}
        erro={erro}
        setErro={setErro}
      />
      <Footer concluidas={concluidas} total={total} icons={icons} erro={erro} />
    </div>
  );
}
