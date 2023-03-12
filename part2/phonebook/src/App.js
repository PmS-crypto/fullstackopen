import { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Person from './components/Person.js'
import backendNotes from './services/persons.js';

const App = (props) => {
  const [persons, setPersons] = useState(props.names)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  var empty = false

  useEffect(() => {
    console.log('effect')
    backendNotes
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])
  
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
    const notequal = (x) => x.name !== newName
    const nequal = persons.every(notequal)
    if (newName === '' || newNumber === "") {
      alert("Please enter the name and number")
      empty = true
      setNewName('')
      setNewNumber('')
    }
    if (nequal && !empty) {
      const newObj = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      // console.log(newObj)
  
      backendNotes
        .create(newObj)
        .then(response => {
          console.log('successfully fetched')
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
          console.log(response)
        })
        .catch(error =>
          console.log(error.response)
        )
      
      console.log('posted in server')
      // setPersons(persons.concat(newObj))
      // setNewName('')
      // setNewNumber('')

      // console.log(persons)
      empty = false
    }
    else {
      if (!empty) {
        if (window.confirm(`${newName} already in the list, update the old number with a new one?`)) {
          // backendNotes
          //   .updateNumber(persons.length+1,newNumber)
          //   .then(response => { setPersons(response))
              setNewName('')
              setNewNumber('')
        }
       
      }
    }
  }

    // const filterCheck = (p) => {
    //   return p.name === newFilter
    // }

    // const filteredContent = () => {
    //   if (newFilter) {
    //     var c = persons
    //     setPersons(persons.filter(filterCheck))
    //     console.log(persons)
    //     setFilter('')
    //   }
    //   else {
    //     alert("Enter a name to filter")
    //   }
    //   if (!persons) {
    //     alert(`${newFilter} is not in the Phonebook`)
    //     setPersons(c)
    //   }
    // }

    const deletePerson = (id) => {
      const toBeDeleted = persons.filter(p => p.id === id)
      const deletedPersonName = toBeDeleted[0].name
      if (window.confirm(`Delete ${deletedPersonName}?`)) {
        backendNotes
          .deletePersonCall(id)
        console.log(`${deletedPersonName} is deleted`)
        setPersons(persons.filter(p => p.id !== id))
      }
    }
  
    const filterToShow = showFilter
      ? persons.filter(person => person.name === newFilter)
      : persons
  
    console.log(filterToShow, "filter")

    return (
      <div>
        <h2>Phonebook</h2>
        <Filter value={newFilter} onChange={handleFilter} eventFunction={() => { setShowFilter(!showFilter) }} />
        <h3>Add a contact</h3>
        <PersonForm submit={displayName} valueName={newName} onChangeName={handleNewName} valueNumber={newNumber} onChangeNumber={handleNewNumber} />
        <h3>List</h3>
        {persons ? <Person function={filterToShow} deletePerson={deletePerson} /> : <></>}
      </div>
    )
  }


export default App