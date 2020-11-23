import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import firebase from "./database/firebase";
import Swal from "sweetalert2";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

function App() {
  const [edition, setEdition] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const dia = moment();
  const format = "D/MM/YYYY";
  const hora = moment();
  const formatHour = "h:mm";
  const hour = hora.format(formatHour);

  useEffect(() => {
    const getDateFireBase = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("tasks").orderBy("hour", "desc").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(arrayData);
      } catch (err) {
        console.error(err);
      }
    };
    getDateFireBase();
  }, [task]);

  const addTask = async (e) => {
    e.preventDefault();

    if (!task.trim() || !title.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wow!, Fill in all the fields!",
        footer: "Thanks for using my app <br/>     Jonathan Gonzalez",
      });
    }
    try {
      const newTask = {
        title: title,
        task: task,
        date: dia.format(format),
        hour: hora.format(formatHour),
      };
      const db = firebase.firestore();
      const data = await db.collection("tasks").add(newTask);

      setTasks([...tasks, { id: data.id, ...newTask }]);
      setTask("");
      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    Swal.fire({
      title: "Are you sure?🤔",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "👍Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        const db = firebase.firestore();
        db.collection("tasks").doc(id).delete();
        const taskFilter = tasks.filter((task) => task.id !== id);
        setTasks(taskFilter);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const activeEditTask = (task, id, title) => {
    setId(id);
    setTask(task);
    setTitle(title);
    setEdition(true);
  };

  const editTask = async (e) => {
    e.preventDefault();
    if (!task.trim() || !title.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wow!, Fill in all the fields!",
        footer: "Thanks for using my app <br/>     Jonathan Gonzalez",
      });
    }

    try {
      const db = firebase.firestore();
      await db
        .collection("tasks")
        .doc(id)
        .update({ task: task, title: title, hour: hour });
      const taskEditing = tasks.map((item) =>
        item.id === id
          ? {
              id: item.id,
              title: title,
              date: item.date,
              hour: hour,
              task: task,
            }
          : item
      );
      Swal.fire({
        title: "¿Are you sure to edit this task?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes🙂, edit it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setTasks(taskEditing);
          setEdition(false);
          setId("");
          setTask("");
          setTitle("");
          Swal.fire("Edited!", "Your file has been edited.", "success");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (


    <div className="container-fluid">     
           <div className="row">
        {/* FORM TASK */}
        <Form
          task={task}
          title={title}
          editTask={editTask}
          addTask={addTask}
          setTask={setTask}
          edition={edition}
          setTitle={setTitle}
        />
      </div>

      {/* CARDS TASKS */}
      <div className="row justify-content-center">
        {tasks.map(({ task, id, date, hour, title }) => (
          <Card
            key={id}
            task={task}
            title={title}
            date={date}
            id={id}
            deleteTask={deleteTask}
            activeEdit={activeEditTask}
            hour={hour}
            edition = {edition}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
