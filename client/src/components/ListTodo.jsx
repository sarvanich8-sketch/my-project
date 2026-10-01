import Todo from "./Todo";

function ListTodo({ students, deleteStudent }) {
  return (
    <div className="card">
      <h2>Student Records</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <Todo
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodo;