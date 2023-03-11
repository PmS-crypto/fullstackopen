const Person = (props) => {
    return (
        <ul>
            {props.function.map(p => <li key={p.id}>{p.name} {p.number}</li>)}                 
      </ul>
    )
}

export default Person