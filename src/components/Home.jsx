import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import edit from "../assets/pencil.gif";
import deletes from "../assets/trash-bin.gif";

const Home = () => {
  const [hasloaded, sethasloaded] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showfinished, setshowFinished] = useState(true);

  useEffect(() => {
    if (hasloaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, hasloaded]);

  useEffect(() => {
    let todosting = localStorage.getItem("todos");
    if (todosting) {
      let todo = JSON.parse(localStorage.getItem("todos"));
      setTodos(todo);
    }
    sethasloaded(true);
  }, []);

  const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLs();
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);

    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLs();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLs();
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLs();
  };

  const toggleFinished = () => {
    setshowFinished(!showfinished);
  };

  const keypress = (e) => {
    // if(todo.length<=3)
    // }
    console.log(e);
  };

  return (
    <>
      <main className="min-h-screen">
        <section className="container bg-white mx-auto my-3 rounded-xl p-4 w-[95%] sm:w-[90%] lg:w-[85%] max-w-5xl shadow-xl shadow-gray-600">
          {/* Title */}
          <h1 className="text-center text-[28px] sm:text-[32px] md:text-[35px] font-[cursive] font-bold text-purple-900">
            Listo - Add your task at one place
          </h1>

          {/* Input and Button */}
          <div className="addTodo flex flex-col justify-center items-center gap-5 my-8 sm:my-10">
            <div className="flex flex-col sm:flex-row gap-3 w-full px-3 sm:px-10">
              <input
                className="bg-white w-full h-11 px-4 border-purple-500 outline-none border rounded-md text-lg sm:text-xl shadow-md"
                type="text"
                value={todo}
                onChange={handleChange}
                placeholder="Add a Todo"
              />
              <button
                onClick={handleAdd}
                disabled={todo.length <= 3}
                className="bg-purple-500 text-white h-11 px-4 rounded-md text-lg sm:text-xl"
              >
                Save
              </button>
            </div>
          </div>

          {/* Toggle + Title */}
          <div className="showcompleted flex flex-col sm:flex-row justify-between items-center gap-4 px-5">
            <h2 className="font-medium text-xl sm:text-2xl">Your ToDos</h2>
            <label className="flex items-center gap-2 text-lg">
              <input
                type="checkbox"
                checked={showfinished}
                onChange={toggleFinished}
                className="w-5 h-5"
              />
              Show Completed
            </label>
          </div>

          <div className="h-[1px] w-full my-4 bg-gray-500"></div>

          {/* ToDos */}
          <div className="todos overflow-y-auto max-h-[400px] px-2 sm:px-5">
            {todos.length === 0 && (
              <div className="m-3 text-xl sm:text-2xl text-gray-600">
                No Todos to Show
              </div>
            )}

            {todos.slice().reverse().map((item) =>
              showfinished || !item.isCompleted ? (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between gap-3 my-2"
                >
                  {/* Task */}
                  <div className="flex items-center gap-3 w-full sm:w-[65%]">
                    <input
                      name={item.id}
                      type="checkbox"
                      checked={item.isCompleted}
                      onChange={handleCheckBox}
                      className="w-5 h-5"
                    />
                    <span
                      className={`text-base sm:text-lg break-words ${
                        item.isCompleted ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {item.todo}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button onClick={(e) => handleEdit(e, item.id)}>
                      <img
                        src={edit}
                        alt="edit"
                        width={28}
                        height={28}
                        className="border border-purple-200"
                      />
                    </button>
                    <button onClick={(e) => handleDelete(e, item.id)}>
                      <img
                        src={deletes}
                        alt="delete"
                        width={28}
                        height={28}
                        className="border border-purple-200"
                      />
                    </button>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
