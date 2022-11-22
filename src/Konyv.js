import './Konyv.css'



function Konyv(props){
    function kosarba(){
        console.log(props.konyvObj)
        props.kosarKezelesFv(props.konyvObj)
    }
    return(
        <div className='konyvek'>
            <h3>{props.konyvObj.cim}</h3>
            <p>{props.konyvObj.szerzo}</p>
            <p>{props.konyvObj.ar}</p>
            <button onClick={kosarba}>Kosárba</button>
        </div>
    );
}
export default Konyv;