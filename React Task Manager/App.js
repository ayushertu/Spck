import React, { useState, useEffect } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggle = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const remainingTasks = tasks.filter(t => !t.completed).length;

  return (
    <div style={styles.container}>
      <h2>📝 Task Manager</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addButton}>Add Task</button>
      </div>

      <p>{remainingTasks} task(s) remaining</p>

      <ul style={styles.list}>
        {tasks.map((t, index) => (
          <li key={index} style={styles.taskItem}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleToggle(index)}
            />
            <span
              style={{
                ...styles.taskText,
                textDecoration: t.completed ? 'line-through' : 'none'
              }}
            >
              {t.text}
            </span>
            <button onClick={() => handleDelete(index)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  input: {
    flex: 1,
    padding: '8px',
  },
  addButton: {
    padding: '8px 12px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  taskText: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    cursor: 'pointer',
  },
};