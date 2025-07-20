import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task.trim()]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold mb-2">Welcome to My First App! 🚀</h1>
        <p className="text-xl">Let's build something awesome together.</p>
      </header>

      {/* To-Do Section */}
      <section className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-purple-100">📝 My To-Do List</h2>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-grow px-3 py-2 rounded text-black focus:outline-none"
          />
          <button
            onClick={addTask}
            className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded text-white font-semibold transition"
          >
            Add Task
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-purple-100 bg-opacity-40 text-purple-900 px-4 py-2 rounded mb-2 shadow"
            >
              {todo}
              <button
                onClick={() => deleteTask(index)}
                className="text-red-600 hover:text-red-800 font-bold"
                aria-label="Delete task"
              >
                ✕
              </button>
            </li>
          ))}
          {todos.length === 0 && (
            <p className="text-purple-200 italic text-center">No tasks yet. Add one!</p>
          )}
        </ul>
      </section>

      {/* About Me Section */}
      <section className="max-w-md mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-purple-100">👋 About Me</h2>
        <p className="mb-2">
          Hi! I’m <strong>Shivang Patel</strong>, a passionate developer learning React, Next.js, and Tailwind CSS.
        </p>
        <p className="mb-1">
          📧 Email: <a href="mailto:shivangpatel2050@gmail.com" className="underline hover:text-purple-300">shivangpatel2050@gmail.com</a>
        </p>
        <p>
          📞 Phone: <a href="tel:+19802011576" className="underline hover:text-purple-300">980-201-1576</a>
        </p>
      </section>
    </main>
  );
}
