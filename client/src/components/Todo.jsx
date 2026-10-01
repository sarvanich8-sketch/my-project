function Todo({ student, deleteStudent }) {
  const grade =
    student.marks >= 90
      ? "A+"
      : student.marks >= 75
      ? "A"
      : student.marks >= 60
      ? "B"
      : student.marks >= 50
      ? "C"
      : "F";

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.roll}</td>
      <td>{student.subject}</td>
      <td>{student.marks}</td>
      <td>{grade}</td>

      <td>
        <button
          className="delete-btn"
          onClick={() => deleteStudent(student.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Todo;