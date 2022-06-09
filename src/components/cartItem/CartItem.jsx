import { useDispatch } from 'react-redux';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./cartItem.scss";
import publicURL from '../../utils/publicURL';
import { decreaseQty, increaseQty, removeItem } from '../../slice/cartSlice';

function CartItem({ cartItem, onlyInfo = false }) {
  const dispatch = useDispatch();
  const { _id, name, img, price, qty, size } = cartItem;

  return (
    <div className="cartItem-wrapper">
      <div className="cartItem-name">
        <h3>{name}</h3>
      </div>
      <div className="cartItem-info">
        <div className="cartItem-img">
          <img src={publicURL(img)} alt="" />
        </div>
        <div className="cartItem-detail">
          <div className="cartItem-detail-left">
            <p>SIZE: {size}</p>
            <p>COLOR: {name}</p>
            <p>PRICE: ₩ {price}</p>
          </div>
          {onlyInfo ? (
            <div className="cartItem-detail-right-qty">
              <p>수량: {qty}</p>
              <p>합계: ₩ {qty * price}</p>
            </div>
          ) : (
            <div className="cartItem-detail-right">
              <div className="cartItem-detail-right-qty">
                <KeyboardArrowUpIcon className="click-btn" onClick={() => dispatch(increaseQty(_id))} />
                <p>{qty}&nbsp;</p>
                <KeyboardArrowDownIcon
                  className="click-btn"
                  onClick={() => {
                    if (qty === 1) {
                      dispatch(removeItem(_id));
                    } else {
                      dispatch(decreaseQty(_id));
                    }
                  }}
                />
              </div>
              <button onClick={() => dispatch(removeItem(_id))}>삭제</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItem;