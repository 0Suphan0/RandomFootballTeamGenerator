import Fenerbahce from './images/fb.png';
import Galatasaray from './images/gs.png';
import Besiktas from './images/bjk.png';
import Bursa from './images/bursa.png';
import Karagümrük from './images/karagümrük.png';
import Sivas from './images/sivas.png';
import Trabzonspor from './images/ts.png';


const teamsMap = {
    Fenerbahce:Fenerbahce,
    Galatasaray:Galatasaray,
    Besiktas:Besiktas,
    Bursa:Bursa,
    Karagümrük:Karagümrük,
    Sivas:Sivas,
    Trabzonspor:Trabzonspor

}


function Team({teamName}) {

    return (
        <>
        <img src={teamsMap[teamName]}  />
        </>
    )
}

export default Team;