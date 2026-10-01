import { useState } from "react";

function Input({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    subject: "",
    marks: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !student.name ||
      !student.roll ||
      !student.subject ||
      !student.marks
    ) {
      alert("Fill all fields");
      return;
    }

    addStudent({
      ...student,
      id: Date.now(),
    });

    setStudent({
      name: "",
      roll: "",
      subject: "",
      marks: "",
    });
  };

  return (
    <div className="card">
      <h2>Add Student Marks</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={student.name}
          onChange={(e) =>
            setStudent({ ...student, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Roll Number"
          value={student.roll}
          onChange={(e) =>
            setStudent({ ...student, roll: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Subject"
          value={student.subject}
          onChange={(e) =>
            setStudent({ ...student, subject: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Marks"
          value={student.marks}
          onChange={(e) =>
            setStudent({ ...student, marks: e.target.value })
          }
        />

        <button>Add Student</button>
      </form>
    </div>
  );
}

export default Input;