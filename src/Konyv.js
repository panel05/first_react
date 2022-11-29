import './Konyv.css'



function Konyv(props){
    function kosarKezeles(){
        
        //App.js kosarkezelésének a hívása
        props.kosarKezeles(props.konyvObj)
        //props.kosarKezeles(props.konyvObj.ar)
    }
    return(
        <div className='konyvek'>
            <h3>{props.konyvObj.cim}</h3>
            <p>{props.konyvObj.szerzo}</p>
            <p>{props.konyvObj.ar}</p>
            {/*Konyv komponenes kosárkezelésének hívása*/ }
            <button onClick={kosarKezeles}>Kosárba</button>
        </div>
    );
}
export default Konyv;