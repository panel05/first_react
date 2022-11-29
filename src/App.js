import Konyv from './Konyv';
import './App.css';
import { useState } from 'react';
import Kosar from './Kosar';
import KosarModel from './model/kosarModel.js';

const konyvTomb=[
  {
    id: 1,
    cim:"Gyilkos",
    szerzo:"Agatha",
    ar:12345
},
{
  id: 2,
  cim:"Vonat",
  szerzo:"Christie",
  ar:54321
},
{
  id : 3,
  cim:"Express",
  szerzo:"Orion",
  ar:15243
}

]

function App() {
  /**statek - reprezentálják az oldal állapotát 
   * és befrissítik az oldal vonaktokó részét
   */
  const [db, setDb] = useState(0);
  const [ar, setAr] = useState(0);
  const [kosaram, setKosaram] = useState([])
  //KosarModell osztály példányosítása
  const kosarModel = new KosarModel(kosaram)

function kosarKezeles(adat){
  //Számoljuk meg hány könyv van a kosárban
  kosarModel.setKosar(adat)
  setKosaram(kosarModel.getKosar())
  setDb(kosarModel.getDb())
  console.log(db)

  /**Összár */
  setAr(kosarModel.getOsszAr())

  /**Kosaram */
  console.log(kosaram)
}

function novel(adat){
  console.log(adat)
  //itt kell példányosítani a modell tagfüggvényét
}

  return (
    <div className="App">
      <header className="App-header">
          <h1>Könyváruház</h1>
      </header>
      <section>
        <p>
        A könyvek darabszáma: {db}</p>
        <p>A könyvek össeára: {ar}</p>
        
        <table className="table table-stripped">
          <thead>
          <tr>
            <th>cím</th>
            <th>Szerző</th>
            <th>Ár</th>
            <th>Db</th>

          </tr>
          </thead>
        <tbody>
        {kosaram.map((elem, index)=>{
          return(<Kosar 
            kosar={elem} 
            key={index} 
            novel = {novel}
            />)
        }
        )
        }
        </tbody>
        </table>
        
      </section>
      
      <article>
      {
        konyvTomb.map((konyv, index)=>{
          return(<Konyv konyvObj={konyv} key={index} kosarKezeles={kosarKezeles}/>)
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
