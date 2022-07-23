import "../css/style.css";

export default function Resultado({respostaPergunta, concluidas, setConcluidas, icons, setIcons, setErro, setEstado}) {

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

    return (
      <div className="resultado">
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