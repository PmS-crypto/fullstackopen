const PersonForm = (props) => {
    return (
        <div>
        <form onSubmit={props.submit}>
            <div>
                name: <input value={props.valueName} onChange={props.onChangeName} />
                </div>
                <div>number: <input value={props.valueNumber} onChange={props.onChangeNumber}/></div>
                <div>
            <button type="submit">add</button>
            </div>
         </form>
        </div>
    )
}

export default PersonForm