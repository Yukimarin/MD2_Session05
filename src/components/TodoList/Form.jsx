import React from "react";

function Form(props) {
  console.log("Form", props);
  //   Destructuring
  const { input, setInput, todo, setTodo, setTotal } = props;
  //   Khởi tạo hàm handleChange
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //   Khời tạo sự kiện submit
  const handleSubmit = (e) => {
    // Ngăn hành động mặc định của browser
    e.preventDefault();
    let newTodo = {
      content: input,
      complete: false,
      isEdit: false,
    };
    // Sẽ tạo biến để sao chép lại mảng todo (sử dụng spread operator)
    // Lý do sao chép mảng:
    // 1. Có thể xảy ra lỗi không cập nhật giao diện
    // 2. Quản lý state (trạng thái) sẽ không chính xác
    // 3. React sẽ phải thực hiện việc hơn => performance
    let addTodo = [...todo];
    // Thêm phần tử newTodo vào trong mảng addTodo
    addTodo.push(newTodo);
    // setState lại cho todo
    setTodo([...addTodo]);
    setTotal(addTodo.length);
    // Làm mới ô input cho người dùng (xóa text mà người dùng vừa nhâp)
    setInput("");
  };
  console.log("Form", todo);
  return (
    <div>
      {/* Form Component */}
      <form className='main-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          placeholder='Enter new todo...'
          value={input}
          onChange={handleChange}
        ></input>
        <button className='add'>Add</button>
      </form>
    </div>
  );
}

export default Form;
