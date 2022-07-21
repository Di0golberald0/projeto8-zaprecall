import Party from "./img/party.png";
import Sad from "./img/sad.png";
import Green from "./img/Green.png";
import Orange from "./img/Orange.png";
import Red from "./img/Red.png";

export default function Footer({ concluidas, total, icons, erro }) {
  function Feedback() {
    return <>{erro === false ? <Sucesso /> : <Fracasso />}</>;
  }

  function Sucesso() {
    return (
      <>
        <div className="emogi">
          <img src={Party} alt="Party" />
          <span className="reaction">Parabéns!</span>
        </div>
        <span className="comment">Você não esqueceu de nenhum flashcard!</span>
      </>
    );
  }

  function Fracasso() {
    return (
      <>
        <div className="emogi">
          <img src={Sad} alt="Sad" />
          <span className="reaction">Putz...</span>
        </div>
        <span className="comment">
          Ainda faltam alguns... Mas não desanime!
        </span>
      </>
    );
  }

  return (
    <div className="bottom">
      <div className="resultado">
        {concluidas === total ? <Feedback /> : <></>}
      </div>
      <span className="comment">
        {concluidas}/{total} CONCLUÍDOS
      </span>
      <div className="Icons">
        {icons.map((icon) =>
          icon === "Red" ? (
            <img src={Red} alt="Icone" />
          ) : icon === "Green" ? (
            <img src={Green} alt="Icone" />
          ) : (
            <img src={Orange} alt="Icone" />
          )
        )}
      </div>
    </div>
  );
}
