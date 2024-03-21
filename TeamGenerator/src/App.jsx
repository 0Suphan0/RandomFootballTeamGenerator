import { useState } from "react";
import Team from "./Team";
import "./App.css";

function App() {
  //verilen arr içerisinden ilgili stringi döner..
  function getRandomTeams() {
    const teamsArray = [
      "Fenerbahce",
      "Galatasaray",
      "Besiktas",
      "Bursa",
      "Karagümrük",
      "Sivas",
      "Trabzonspor",
    ];
    return teamsArray[Math.floor(Math.random() * teamsArray.length)];
  }

  //teamsArray değiskenine önce bos arr ata.
  const [teamsArray, setTeams] = useState([]);

  //click tetiklenince içerisindeki elemanları tut ve yeni elemanı ata. setstate yap.
  const handleClick = () => {
    setTeams([...teamsArray, getRandomTeams()]);
  };


  const teamsList=teamsArray.map((team, index) => {
    return <Team key={index} teamName={team} />;
  })

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Takım Ekle
      </button>

      <div className="teamsList">{teamsList}</div>
    </div>
  );
}

export default App;
