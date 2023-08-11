// rfce
import React from "react";

function ColorPicker(props) {
  console.log("ColorPicker", props);
  // Sử dụng destructuring
  // const { color, setColor } = props;
  // Cách 1
  // const handleChange = (e) => {
  //   setColor(e.target.value);
  // };
  // Cách 2:
  const handleChange = (e) => {
    props.changeColor(e.target.value);
  };
  return (
    <div>
      {/* Cách 1 */}
      {/* <input type='color' onChange={handleChange} /> */}
      {/* Cách 2 */}
      <input type='color' onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
