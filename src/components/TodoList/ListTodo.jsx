import React from "react";

function ListTodo(props) {
  console.log("ListTodo", props);
  const { todo, setTodo, edit, setEdit, setTotal } = props;
  // Khởi tạo hàm handleDelete
  const handleDelete = (i) => {
    // console.log(i);
    // Sao chép mảng todo
    let deleteTodo = [...todo];
    deleteTodo.splice(i, 1);
    // setState của todo
    setTodo(deleteTodo);
    setTotal(deleteTodo.length);
  };
  // Khởi tạo hàm handleComplete
  const handleComplete = (i) => {
    // console.log(i);
    // sao chép lại mảng todo
    let completeTodo = [...todo];
    completeTodo[i].complete = !completeTodo[i].complete; //true
    setTodo(completeTodo);
    let pendingTask = completeTodo.filter((e) => !e.complete);
    setTotal(pendingTask.length);
  };
  // Khởi tạo hàm handleEdit
  const handleEdit = (i) => {
    // console.log(i);
    let editTodo = [...todo];
    editTodo[i].isEdit = !editTodo[i].isEdit;
    setTodo(editTodo);
  };
  // Khởi tạo hàm handleEditChange
  const handleEditChange = (e) => {
    setEdit(e.target.value);
  };
  // Khởi tạo hàm handleUpdate
  const handleUpdate = (i) => {
    let updateTodo = [...todo];
    updateTodo[i].content = edit;
    updateTodo[i].isEdit = !updateTodo[i].isEdit;
    setTodo(updateTodo);
  };
  return (
    <div>
      {/* ListTodo Component */}
      <div className='container-todo'>
        {/* In dữ liệu trong mảng todos */}
        {todo.map((e, i) =>
          !e.isEdit ? (
            <div key={i} className={e.complete ? "completed" : "list-todo"}>
              <div className='todo-item'>{e.content}</div>
              {/* Khi ấn edit thì đổi content thành input */}
              {/* <input type="text" /> */}
              <div className='list-btn'>
                <button>
                  <ion-icon
                    name='create-outline'
                    onClick={() => handleEdit(i)}
                  ></ion-icon>
                </button>
                <button>
                  <ion-icon
                    name='trash-outline'
                    onClick={() => handleDelete(i)}
                  ></ion-icon>
                </button>
                <button>
                  <ion-icon
                    name='checkmark-done-outline'
                    onClick={() => handleComplete(i)}
                  ></ion-icon>
                </button>
              </div>
            </div>
          ) : (
            <div key={i} className={e.complete ? "completed" : "list-todo"}>
              {/* Khi ấn edit thì đổi content thành input */}
              <input
                className='todo-item'
                type='text'
                onChange={handleEditChange}
              />
              <div className='list-btn'>
                <button>
                  <ion-icon
                    name='refresh-circle-outline'
                    onClick={() => handleUpdate(i)}
                  ></ion-icon>
                </button>
                <button>
                  <ion-icon
                    name='trash-outline'
                    onClick={() => handleDelete(i)}
                  ></ion-icon>
                </button>
                <button>
                  <ion-icon
                    name='checkmark-done-outline'
                    onClick={() => handleComplete(i)}
                  ></ion-icon>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ListTodo;
