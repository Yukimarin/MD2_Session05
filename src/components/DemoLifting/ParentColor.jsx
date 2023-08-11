// rfce
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function ParentColor() {
  // Lifting State Up (nâng trạng thái lên cấp trên)
  // - Quản lý tất cả các state (trạng thái) ở component Cha, và truyền xuống con thông qua props
  // - Component con sẽ sử dụng các hàm cập nhật thay đổi trạng thái và sẽ được cập nhật lên component cha
  //   và đồng bộ với các component con khác
  const [color, setColor] = useState("#000000");
  //   Cách 2: Tạo hàm truyền xuống component con
  const handleChangeColor = (e) => {
    setColor(e);
  };
  return (
    <div>
      <h1>Lifting State Up</h1>
      {/* Cách 1 */}
      {/* <ColorPicker color={color} setColor={setColor}></ColorPicker> */}
      {/* Cách 2 */}
      <ColorPicker changeColor={handleChangeColor}></ColorPicker>
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          margin: "0 auto",
        }}
      ></div>
    </div>
  );
}

export default ParentColor;
