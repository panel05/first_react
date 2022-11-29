function Kosar(props){
    //console.log(props.kosar)

function novel(){
    props.novel(props.kosar)
}

    return( <tr>
    <td>{props.kosar.cim}</td>
    <td>{props.kosar.szerzo}</td>
    <td>{props.kosar.ar}</td>
    <td>{props.kosar.db}</td>
    <td><button onClick={novel}>+</button></td>
    <td><button>-</button></td>
    <td><button>Töröl</button></td>
    </tr>
    )
}

export default Kosar;