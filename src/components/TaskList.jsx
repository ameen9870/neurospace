import { useEffect, useState } from "react";

import toast from "react-hot-toast";

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

function TaskList({ setAllTasks }) {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  const [category, setCategory] = useState("Study");

  const [priority, setPriority] = useState("Medium");

  const [dueDate, setDueDate] = useState("");

  /* EDIT STATES */

  const [editingTaskId, setEditingTaskId] = useState(null);

  const [editedTitle, setEditedTitle] = useState("");

  const [editedCategory, setEditedCategory] = useState("");

  const [editedPriority, setEditedPriority] = useState("");

  const [editedDueDate, setEditedDueDate] = useState("");

  /* LOAD TASKS */

  const fetchTasks = async () => {

    if (!auth.currentUser) return;

    const q = query(
      collection(db, "tasks"),
      where("uid", "==", auth.currentUser.uid)
    );

    const querySnapshot = await getDocs(q);

    const taskData = [];

    querySnapshot.forEach((docItem) => {

      taskData.push({
        id: docItem.id,
        ...docItem.data(),
      });

    });

    /* SORT BY DATE */

    taskData.sort((a, b) => {

      if (!a.dueDate) return 1;

      if (!b.dueDate) return -1;

      return new Date(a.dueDate) - new Date(b.dueDate);

    });

    setTasks(taskData);

    setAllTasks(taskData);

  };

  /* ADD TASK */

  const addTask = async () => {

    if (!task.trim()) return;

    await addDoc(collection(db, "tasks"), {

      title: task,

      completed: false,

      uid: auth.currentUser.uid,

      category,

      priority,

      dueDate,

    });

    toast.success("Task added 🚀");

    setTask("");

    setDueDate("");

    fetchTasks();

  };

  /* DELETE TASK */

  const deleteTask = async (id) => {

    await deleteDoc(doc(db, "tasks", id));

    toast.error("Task deleted");

    fetchTasks();

  };

  /* TOGGLE COMPLETE */

  const toggleComplete = async (id, completed) => {

    await updateDoc(doc(db, "tasks", id), {

      completed: !completed,

    });

    toast.success("Task updated ✨");

    fetchTasks();

  };

  /* START EDIT */

  const startEditing = (task) => {

    setEditingTaskId(task.id);

    setEditedTitle(task.title);

    setEditedCategory(task.category);

    setEditedPriority(task.priority);

    setEditedDueDate(task.dueDate || "");

  };

  /* SAVE EDIT */

  const saveEdit = async (id) => {

    await updateDoc(doc(db, "tasks", id), {

      title: editedTitle,

      category: editedCategory,

      priority: editedPriority,

      dueDate: editedDueDate,

    });

    toast.success("Task updated ✨");

    setEditingTaskId(null);

    fetchTasks();

  };

  /* INITIAL LOAD */

  useEffect(() => {

    fetchTasks();

  }, []);

  /* FILTER TASKS */

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase());

    if (filter === "completed") {
      return matchesSearch && task.completed;
    }

    if (filter === "pending") {
      return matchesSearch && !task.completed;
    }

    return matchesSearch;

  });

  return (

    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Today's Tasks
      </h2>

      {/* ADD TASK SECTION */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-5 mb-8">

        {/* TASK INPUT */}

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

        {/* OPTIONS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* CATEGORY */}

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >

            <option>Study</option>

            <option>Work</option>

            <option>Personal</option>

            <option>Health</option>

          </select>

          {/* PRIORITY */}

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >

            <option>High</option>

            <option>Medium</option>

            <option>Low</option>

          </select>

          {/* DEADLINE */}

          <div className="relative">

            <label className="absolute -top-3 left-4 text-xs text-gray-400 bg-[#0b0b0b] px-2">
              Deadline
            </label>

            <input
              type="date"
              value={dueDate}
              onChange={(e) =>
                setDueDate(e.target.value)
              }
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white"
            />

          </div>

        </div>

      </div>

      {/* SEARCH SECTION */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-5 mb-8">

        <h3 className="text-xl font-semibold mb-4">
          Search & Filter
        </h3>

        <div className="flex flex-col md:flex-row gap-4">

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          {/* FILTER */}

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >

            <option value="all">
              All Tasks
            </option>

            <option value="completed">
              Completed
            </option>

            <option value="pending">
              Pending
            </option>

          </select>

        </div>

      </div>

      {/* TASK LIST */}

      <div className="space-y-4">

        {filteredTasks.map((task) => {

          const isOverdue =

            task.dueDate &&

            !task.completed &&

            new Date(task.dueDate) < new Date();

          return (

            <div
              key={task.id}
              className={`border rounded-2xl p-5 flex items-center justify-between transition ${
                isOverdue
                  ? "bg-red-500/10 border-red-500/30"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >

              <div className="flex-1">

                {filteredTasks.length === 0 && (

                  <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center text-gray-400">

                   No tasks found 🚀
                   </div>
                )}

                {/* EDIT MODE */}

                {editingTaskId === task.id ? (

                  <div className="space-y-3">

                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) =>
                        setEditedTitle(e.target.value)
                      }
                      className="bg-black/30 border border-white/10 rounded-xl px-4 py-2 outline-none w-full"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                      <select
                        value={editedCategory}
                        onChange={(e) =>
                          setEditedCategory(e.target.value)
                        }
                        className="bg-black/30 border border-white/10 rounded-xl px-4 py-2 outline-none"
                      >

                        <option>Study</option>

                        <option>Work</option>

                        <option>Personal</option>

                        <option>Health</option>

                      </select>

                      <select
                        value={editedPriority}
                        onChange={(e) =>
                          setEditedPriority(e.target.value)
                        }
                        className="bg-black/30 border border-white/10 rounded-xl px-4 py-2 outline-none"
                      >

                        <option>High</option>

                        <option>Medium</option>

                        <option>Low</option>

                      </select>

                      <input
                        type="date"
                        value={editedDueDate}
                        onChange={(e) =>
                          setEditedDueDate(e.target.value)
                        }
                        className="bg-black/30 border border-white/10 rounded-xl px-4 py-2 outline-none"
                      />

                    </div>

                  </div>

                ) : (

                  <>
                    <p
                      className={`text-lg ${
                        task.completed
                          ? "line-through text-gray-500"
                          : ""
                      }`}
                    >
                      {task.title}
                    </p>

                    {/* BADGES */}

                    <div className="flex flex-wrap gap-3 mt-3">

                      {/* CATEGORY */}

                      <span className="text-sm px-3 py-1 rounded-xl bg-purple-500/20 text-purple-300">

                        {task.category}

                      </span>

                      {/* PRIORITY */}

                      <span
                        className={`text-sm px-3 py-1 rounded-xl ${
                          task.priority === "High"
                            ? "bg-red-500/20 text-red-300"
                            : task.priority === "Medium"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-green-500/20 text-green-300"
                        }`}
                      >

                        {task.priority}

                      </span>

                      {/* DEADLINE */}

                      {task.dueDate && (

                        <span
                          className={`text-sm px-3 py-1 rounded-xl ${
                            isOverdue
                              ? "bg-red-500/20 text-red-300"
                              : "bg-blue-500/20 text-blue-300"
                          }`}
                        >

                          {isOverdue
                            ? `Expired: ${new Date(task.dueDate).toLocaleDateString()}`
                            : `Deadline: ${new Date(task.dueDate).toLocaleDateString()}`}

                        </span>

                      )}

                    </div>
                  </>

                )}

              </div>

              {/* ACTION BUTTONS */}

              <div className="flex gap-3 flex-wrap ml-4">

                {editingTaskId === task.id ? (

                  <button
                    onClick={() =>
                      saveEdit(task.id)
                    }
                    className="bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 transition"
                  >
                    Save
                  </button>

                ) : (

                  <button
                    onClick={() =>
                      startEditing(task)
                    }
                    className="bg-yellow-500 px-4 py-2 rounded-xl hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>

                )}

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

          );

        })}

      </div>

    </div>

  );
}

export default TaskList;