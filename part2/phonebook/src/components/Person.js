const Person = (props) => {
    return (
        <ul>
            {props.function.map(p => <li key={p.id}>{p.name} {p.number}  <button onClick={()=>props.deletePerson(p.id)}>delete</button></li>)}                 
        </ul>
    )
}

export default Person