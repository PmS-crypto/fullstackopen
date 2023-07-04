// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.use(express.json())
// app.use(cors())

  
// app.get('/api/notes', (request, response) => {
//     Note.find({}).then(notes => {
//       response.json(notes)
//     })
// })

// app.post('/api/notes', (request, response) => {
//     const body = request.body
  
//     if (body.content === undefined) {
//       return response.status(400).json({ error: 'content missing' })
//     }
  
//     const note = new Note({
//       content: body.content,
//       important: body.important || false,
//     })
  
//     note.save().then(savedNote => {
//       response.json(savedNote)
//     })
//   })
  
// let notes = [
//     {
//         id: 1,
//         content: "HTML is easy",
//         important: true 
//     },
//     {
//         id: 2,
//         content: "Browser can execute only Javascript",
//         important: false
//     },
//     {
//         id: 3,
//         content: "JavaScript is simple and quick to learn",
//         important: true
//     },
//     {
//         id: 4,
//         content: "Full stack web development is available",
//         important: true
//     }
// ]

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (req, res) => {
//     res.json(notes)
// })

// app.get('/api/notes/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const note = notes.find(note => note.id === id);

//     if (note) {
//         res.json(note)
//     }
//     else {
//         res.status(404).end()
//     }
// })

// app.delete('/api/notes/:id', (req, res) => {
//     const id = Number(req.params.id);
//     notes = notes.filter(note => note.id !== id);

//     res.status(204).end()
// })

// app.post('/api/notes', (req, res) => { 
//     const note = req.body

//     if (!note || !note.content) {
//         return res.status(400).json({
//             error: 'note\'s content is missing'
//         })
//     }

//     const ids = notes.map(note => note.id)
//     const maxId = Math.max(...ids)

//     const newNote = {
//         id: maxId + 1,
//         content: note.content,
//         important: typeof note.important !== 'undefined' ? note.important : false,
//     }

//     notes = [...notes, newNote]

//     res.status(201).json(newNote)
// })

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const Note = require('./models/note')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(express.static('build'))

let notes = [
]


app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})