import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const addStudent = (e) => {
    e.preventDefault();

    if (!name || !age) return;

    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId ? { ...student, name, age } : student,
        ),
      );

      setEditId(null);
    } else {
      const newStudent = {
        id: Date.now(),
        name,
        age,
      };

      setStudents([...students, newStudent]);
    }

    setName("");
    setAge("");
  };

  const filteredStudent = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  const handleEdit = (student) => {
    setName(student.name);
    setAge(student.age);
    setEditId(student.id);
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Student Management System
      </h1>

      <input
        type="search"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-3 rounded mb-5"
      />

      <form
        onSubmit={addStudent}
        className="flex flex-col md:flex-row gap-4 mb-6"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          className="flex-1 border p-3 rounded"
        />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Your Age"
          className="flex-1 border p-3 rounded"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          {editId ? "Update Student" : "Add Student"}
        </button>
      </form>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Name</th>
            <th className="border p-3">Age</th>
            <th className="border p-3">Status</th>
            <th className="border p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudent.length > 0 ? (
            filteredStudent.map((student) => (
              <tr key={student.id} className="text-center">
                <td className="border p-3">{student.name}</td>

                <td className="border p-3">{student.age}</td>

                <td className="border p-3">
                  {student.age >= 18 ? (
                    <span className="text-green-600 font-semibold">Adult</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Minor</span>
                  )}
                </td>

                <td className="border p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(student)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-5">
                No Student Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <h3 className="mt-5 text-xl font-semibold">
        Total Students: {filteredStudent.length}
      </h3>
    </div>
  );
}

export default Home;
