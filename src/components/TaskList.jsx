import { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import { auth, db } from "../firebase";

function TaskList() {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  // LOAD TASKS

  const fetchTasks = async () => {

    if (!auth.currentUser) return;

    const q = query(
      collection(db, "tasks"),
      where("uid", "==", auth.currentUser?.uid)
    );

    const querySnapshot = await getDocs(q);

    const taskData = [];

    querySnapshot.forEach((docItem) => {

      taskData.push({
        id: docItem.id,
        ...docItem.data(),
      });
    });

    setTasks(taskData);
  };

  // ADD TASK

  const addTask = async () => {

    if (!task.trim()) return;

    await addDoc(collection(db, "tasks"), {
      title: task,
      completed: false,
      uid: auth.currentUser.uid,
    });

    setTask("");

    fetchTasks();
  };

  // DELETE TASK

  const deleteTask = async (id) => {

    await deleteDoc(doc(db, "tasks", id));

    fetchTasks();
  };

  // TOGGLE COMPLETE

  const toggleComplete = async (id, completed) => {

    await updateDoc(doc(db, "tasks", id), {
      completed: !completed,
    });

    fetchTasks();
  };

  // INITIAL LOAD

  useEffect(() => {

    fetchTasks();

  }, []);

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Today's Tasks
      </h2>

      {/* INPUT */}

      <div className="flex gap-3 mb-6">

        <input
          type="text"
          placeholder="Add task..."
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
          className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
        />

        <button
          onClick={addTask}
          className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 rounded-2xl hover:scale-105 transition"
        >
          Add
        </button>

      </div>

      {/* TASKS */}

      <div className="space-y-4">

        {tasks.map((task) => (

          <div
            key={task.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:bg-white/10 transition"
          >

            <div>

              <p
                className={`text-lg ${
                  task.completed
                    ? "line-through text-gray-500"
                    : ""
                }`}
              >
                {task.title}
              </p>

            </div>

            <div className="flex gap-3">

              <button
                onClick={() =>
                  toggleComplete(task.id, task.completed)
                }
                className="bg-green-500 px-4 py-2 rounded-xl hover:bg-green-600 transition"
              >
                ✓
              </button>

              <button
                onClick={() =>
                  deleteTask(task.id)
                }
                className="bg-red-500 px-4 py-2 rounded-xl hover:bg-red-600 transition"
              >
                ✕
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TaskList;