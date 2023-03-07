const Course = ({ course }) => {
    var total = course.parts.reduce((sum, x) => sum + x.exercises, 0)
    return (
      <div>
        <h3>{course.name}</h3>
      {course.parts.map(c => <p key={c.id}>{c.name} {c.exercises} </p>)}
      <h4>total of {total} exercises</h4>
      </div>
    )
    }
  
export default Course
