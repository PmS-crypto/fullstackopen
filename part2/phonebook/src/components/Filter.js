const Filter = (props) => {
    return (
        <div>
            Filter by name: <input value={props.value} onChange={props.onChange} />
            <button onClick={props.eventFunction}>filter</button>
        </div>
    )
}

export default Filter