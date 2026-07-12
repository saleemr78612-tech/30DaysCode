import React, { useEffect, useState } from "react";

function Day4() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load data from localStorage
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem(
      "registeredStudents"
    );

    return savedStudents
      ? JSON.parse(savedStudents)
      : [];
  });

  // Save data in localStorage
  useEffect(() => {
    localStorage.setItem(
      "registeredStudents",
      JSON.stringify(students)
    );
  }, [students]);

  const addStudent = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    // Duplicate check
    const isDuplicate = students.some(
      (student) =>
        student.name.toLowerCase().trim() ===
          name.toLowerCase().trim() &&
        student.id !== editingId
    );

    if (isDuplicate) {
      alert("Student already exists!");
      return;
    }

    // Edit Student
    if (editingId !== null) {
      const updatedStudents = students.map((student) =>
        student.id === editingId
          ? { ...student, name: name }
          : student
      );

      setStudents(updatedStudents);
      setEditingId(null);
    } else {
      // Add Student
      const newStudent = {
        id: Date.now(),
        name: name,
      };

      setStudents([...students, newStudent]);
    }

    setName("");
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  const filteredStudents = students.filter((student) =>
    student.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Search Student"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          {editingId !== null
            ? "Update Student"
            : "Add Student"}
        </button>
      </form>

      <hr />

      <h3>Total Students: {students.length}</h3>

      {filteredStudents.length > 0 ? (
        filteredStudents.map((student) => (
          <div
            key={student.id}
            style={{
              marginBottom: "10px",
            }}
          >
            <span>{student.name}</span>

            <button
              type="button"
              onClick={() =>
                deleteStudent(student.id)
              }
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>

            <button
              type="button"
              onClick={() => {
                setName(student.name);
                setEditingId(student.id);
              }}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
          </div>
        ))
      ) : (
        <p>No Students Found</p>
      )}
    </div>
  );
}

export default Day4;