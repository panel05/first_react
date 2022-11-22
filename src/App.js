import Konyv from './Konyv';
import './App.css';

const konyvTomb=[
  {
    cim:"Gyilkos",
    szerzo:"Agatha",
    ar:12345
},
{
  cim:"Vonat",
  szerzo:"Christie",
  ar:54321
},
{
  cim:"Express",
  szerzo:"Orion",
  ar:15243
}

]

function App() {
function kosarKezeles(adat){
  console.log(adat)
}

  return (
    <div className="App">
      <header className="App-header">
          <h1>Könyváruház</h1>
      </header>
      <article>
      {
        konyvTomb.map((konyv, index)=>{
          return(<Konyv konyvObj={konyv} key={index} kosarKezelesFv={kosarKezeles}/>)
        }
        )
      }

      </article>
      <footer>
        <p>Pantl Alex Balázs</p>
      </footer>
    </div>
  );
}

export default App;
