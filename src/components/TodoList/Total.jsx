import React from "react";

function Total(props) {
  const { total, setTotal, setTodo } = props;
  const handleClearAll = () => {
    setTodo([]);
    setTotal(0);
  };
  return (
    <div>
      {/* Total Component */}
      <div className='total list-todo'>
        <div className='todo-item'>You have {total} pending task</div>
        <button className='btn-clear' onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Total;
