import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState(props.names) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [showFilter, setShowFilter] = useState(false)

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const displayName = (event) => {
    event.preventDefault()
    const notequal = (x) => x.name!==newName
    const nequal = persons.every(notequal)
  
    if (nequal) {
      const newObj = {
        id: persons.length+1,
        name: newName,
        number: newNumber
      }
      // console.log(newObj)
  
      setPersons(persons.concat(newObj))
      setNewName('')
      setNewNumber('')
      // console.log(persons)
    }
    else {
      alert(`${newName} already in the list`)
      setNewName('')
      setNewNumber('')
    }
  }

  const filterCheck = (p) => {
    return p.name === newFilter
  }

  const filteredContent = () => {
    if (newFilter) {
      var c = persons
      setPersons(persons.filter(filterCheck))
      console.log(persons)
      setFilter('')
    }    
    else {
      alert("Enter a name to filter")
    }
    if (!persons) {
      alert(`${newFilter} is not in the Phonebook`)
      setPersons(c)
    }
  }

  const filterToShow = showFilter
    ? persons.filter(person => person.name===newFilter)
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      Filter by name: <input value={newFilter} onChange={handleFilter} />
      <button onClick={()=>{setShowFilter(!showFilter)}}>filter</button>
      <h3>Add a contact</h3>
      <form onSubmit={displayName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>List</h3>
      <ul>
        {filterToShow.map(p => <li key={p.id}>{p.name} {p.number}</li>)}
      </ul>
    </div>
  )
}

export default App