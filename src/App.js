//importación de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//importacion de componentes JS
import Header from "./components/Header"
import Button from "./components/boton";
import { useState } from "react";
import Inputs from "./components/Inputs";
import Footer from "./components/Footer"

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    if (name === "") {
      alert("porfavor, Introduzca un nombre");
      return;
    }
  };

  return (
    <div className="in">
      <Header title="2do Desafío REACT">
      </Header>
      <h2>Cambio de estado de los componentes</h2>

      <div className="cards">
        <Inputs
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
        />
        {password === "252525" ? <Button validate={validate} /> : null}
      </div>   
      <Footer footerText="Todos los derechos reservados" footerDate="2022" /> 
    </div>
  );
}

export default App;
