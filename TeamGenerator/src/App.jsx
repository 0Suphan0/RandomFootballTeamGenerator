import { useState } from 'react'
import Team from './Team'
import './App.css'



function App() {


  //verilen arr içerisinden ilgili stringi döner..
  function getRandomTeams(){
    const teamsArray = ['Fenerbahce','Galatasaray','Besiktas','Bursa','Karagümrük','Sivas','Trabzonspor'];
    return teamsArray[Math.floor(Math.random()*teamsArray.length)]
  }

  //teamsArray değiskenine önce bos arr ata.
  const [teamsArray, setTeams] = useState([])

  //click tetiklenince içerisindeki elemanları tut ve yeni elemanı ata. setstate yap.
  const handleClick = () => {
    setTeams([...teamsArray,getRandomTeams()])
  }

  return (
    <>
    <button onClick={handleClick}>Takım Ekle</button>


    {// her bir teamsArr dolas ve her birine team değiskenine atayarak dön.
      teamsArray.map((team,index) => {
        return <Team key={index} teamName={team}/>
      })
    }

    
    </>
  );
}

export default App;