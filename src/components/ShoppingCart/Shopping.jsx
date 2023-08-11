import React, { useState } from "react";
import Cart from "./Cart";
import "./Shopping.css";
function Shopping() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "https://cdn.tgdd.vn/Files/2021/10/28/1394086/appleevent%E2%80%94september71-17-0screenshot_1280x720-800-resize.png",
      name: "IPhone14",
      price: 140000,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0Lv5mshETC77KCzNLGN_MPkrSWYHycs-krlGwihjx4oGM2Z0OvYI-bBw3ld4gdZMvxo&usqp=CAU",
      name: "IPad",
      price: 200000,
    },
    {
      id: 3,
      img: "//images.samsung.com/is/image/samsung/p6pim/vn/sp-lsp3blaxxv/gallery/vn-the-freestyle-lsp3b-sp-lsp3blaxxv-530663510?$2052_1641_PNG$",
      name: "SamSung",
      price: 100000,
    },
  ]);
  const [cart, setCart] = useState([]);
  const handleAddCart = (i) => {
    const addCart = [...cart];
    let newItem = products[i];
    newItem.quantity = 1;
    // TH không có sản phẩm tồn tại trong giỏ hàng
    addCart.push(newItem);
    setCart(addCart);
  };
  return (
    <div>
      <div className='container'>
        <h1>Your Shopping Cart</h1>
        {/* List Item */}
        <div id='list' className='list'>
          {products.map((e, i) => (
            <div id='item' className='item'>
              <div className='img'>
                <img src={e.img} />
              </div>
              <div className='title'>{e.name}</div>
              <div className='price'>{e.price}</div>
              <button
                id='btn-add'
                onClick={() => {
                  handleAddCart(i);
                }}
              >
                Add To Card
              </button>
            </div>
          ))}
        </div>
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default Shopping;
