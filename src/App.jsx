import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import Welcome from "./components/Welcome";
import GridAndComments from "./components/GridAndComments";
//import specifico da un import globale => condensato linee sotto in quella sopra
//NB: se volessi creare la navbar attraverso un component NON posso chimarla Navbar a causa del conflitto con boostrap
import MyFooter from "./components/MyFooter";

function App() {
  //Dichiaro una const che è un array di oggetti che passa i file json

  return (
    <div className="App">
      <MyNav brand="EpiBooks" claim="Week 10 Lesson 01" />
      <Welcome />
      <Container>
        <GridAndComments />
      </Container>
      <MyFooter
        content1={
          <ul>
            <li>Policy</li>
            <li>Termini di servizio</li>
            <li>Contatti</li>
          </ul>
        }
        content2={
          <ul>
            <li>Testo col 2</li>
            <li>Testo col 2</li>
            <li>Testo col 2</li>
          </ul>
        }
        content3={
          <ul>
            <li>Testo col 3</li>
            <li>Testo col 3</li>
            <li>Testo col 3</li>
          </ul>
        }
      />
    </div>
  );
}

export default App;
