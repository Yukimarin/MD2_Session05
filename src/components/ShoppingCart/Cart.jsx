import React from "react";
import "./Cart.css";
function Cart(props) {
  const { cart } = props;
  return (
    <div>
      <div className='cart'>
        <h1>Đây là giỏ hàng</h1>
        <div className='container-cart'>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Ảnh</th>
                <th>Tên Sản Phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td className='img-cart'>
                    <img src={e.img} alt='' />
                  </td>
                  <td>{e.name}</td>
                  <td>{e.quantity}</td>
                  <td>{e.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
